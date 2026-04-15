<?php

namespace App\Http\Controllers;

use App\Services\PostRepository;
use App\Support\Seo;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function __invoke(PostRepository $posts): Response
    {
        $urls = [
            [
                'loc' => Seo::BASE_URL,
                'lastmod' => now()->toDateString(),
                'changefreq' => 'weekly',
                'priority' => '1.0',
            ],
            [
                'loc' => Seo::BASE_URL.'/blog',
                'lastmod' => now()->toDateString(),
                'changefreq' => 'daily',
                'priority' => '0.9',
            ],
        ];

        foreach ($posts->all() as $post) {
            $urls[] = [
                'loc' => Seo::BASE_URL.$post->url(),
                'lastmod' => $post->isoDate(),
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ];
        }

        return response()
            ->view('seo.sitemap', ['urls' => $urls])
            ->header('Content-Type', 'application/xml');
    }
}
