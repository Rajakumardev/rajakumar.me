<?php

namespace App\Services;

use App\Data\PostData;
use Carbon\CarbonImmutable;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\DisallowedRawHtml\DisallowedRawHtmlExtension;
use League\CommonMark\MarkdownConverter;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class PostRepository
{
    private readonly string $postsPath;

    public function __construct()
    {
        $this->postsPath = base_path('content/posts');
    }

    public function all(): Collection
    {
        $cacheKey = 'posts.'.md5($this->contentFingerprint());

        $cached = Cache::get($cacheKey);

        if ($cached instanceof Collection) {
            return $cached;
        }

        if ($cached !== null) {
            Cache::forget($cacheKey);
        }

        $posts = (function (): Collection {
            if (! File::isDirectory($this->postsPath)) {
                return collect();
            }

            $converter = $this->buildMarkdownConverter();

            return collect(File::allFiles($this->postsPath))
                ->filter(fn ($file) => $file->getExtension() === 'md')
                ->map(fn ($file) => $this->mapFileToPost($file->getPathname(), $converter))
                ->filter()
                ->sortByDesc(fn (PostData $post) => $post->date->getTimestamp())
                ->values();
        })();

        Cache::put($cacheKey, $posts, now()->addMinutes(30));

        return $posts;
    }

    public function latest(int $limit = 2): Collection
    {
        return $this->all()->take($limit)->values();
    }

    public function findBySlug(string $slug): ?PostData
    {
        $normalized = Str::of($slug)->lower()->trim('/')->toString();

        return $this->all()->first(fn (PostData $post) => $post->slug === $normalized);
    }

    private function mapFileToPost(string $filePath, MarkdownConverter $converter): ?PostData
    {
        $document = YamlFrontMatter::parseFile($filePath);
        $matter = $document->matter();

        $title = (string) ($matter['title'] ?? 'Untitled');
        $dateValue = (string) ($matter['date'] ?? now()->toDateString());
        $featuredImage = (string) ($matter['featuredImage'] ?? '');
        $metaDescription = (string) ($matter['metaDescription'] ?? '');

        $date = CarbonImmutable::parse($dateValue);

        $markdown = $document->body();
        $html = $converter->convert($markdown)->getContent();

        $relativePath = Str::of($filePath)
            ->after($this->postsPath.DIRECTORY_SEPARATOR)
            ->replace(DIRECTORY_SEPARATOR, '/')
            ->replace('.md', '')
            ->lower()
            ->toString();

        return new PostData(
            slug: $relativePath,
            title: $title,
            date: $date,
            featuredImage: $featuredImage,
            metaDescription: $metaDescription,
            markdown: $markdown,
            html: $html,
        );
    }

    private function contentFingerprint(): string
    {
        if (! File::isDirectory($this->postsPath)) {
            return 'empty';
        }

        $parts = collect(File::allFiles($this->postsPath))
            ->filter(fn ($file) => $file->getExtension() === 'md')
            ->map(fn ($file) => $file->getFilename().'|'.$file->getMTime())
            ->sort()
            ->implode(';');

        return $parts === '' ? 'empty' : $parts;
    }

    private function buildMarkdownConverter(): MarkdownConverter
    {
        $environment = new Environment([
            'html_input' => 'strip',
            'allow_unsafe_links' => false,
        ]);

        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new DisallowedRawHtmlExtension());

        return new MarkdownConverter($environment);
    }
}
