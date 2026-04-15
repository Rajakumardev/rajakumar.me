<?php

namespace App\Support;

use App\Data\PostData;

final class Seo
{
    public const SITE_NAME = 'Rajakumar Blog';

    public const BASE_URL = 'https://rajakumar.me';

    public static function page(string $title, string $description, string $path = '/', ?string $image = null): array
    {
        $canonical = rtrim(self::BASE_URL, '/').($path === '/' ? '' : $path);

        return [
            'title' => $title,
            'description' => $description,
            'canonical' => $canonical,
            'ogType' => 'website',
            'image' => $image,
        ];
    }

    public static function post(PostData $post): array
    {
        return [
            'title' => $post->title,
            'description' => $post->metaDescription,
            'canonical' => self::BASE_URL.$post->url(),
            'ogType' => 'article',
            'image' => $post->featuredImage,
        ];
    }
}
