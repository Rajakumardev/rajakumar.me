<?php

namespace App\Http\Controllers;

use App\Services\PostRepository;
use App\Support\Seo;

class HomeController extends Controller
{
    public function __invoke(PostRepository $posts)
    {
        $featuredPosts = $posts->latest(2);

        return view('home', [
            'posts' => $featuredPosts,
            'seo' => Seo::page(
                title: 'Rajakumar, Full Stack Developer',
                description: 'Personal blog by Rajakumar on web development, backend engineering, and practical software lessons.',
            ),
            'jsonLd' => [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'WebSite',
                    'name' => Seo::SITE_NAME,
                    'url' => Seo::BASE_URL,
                    'description' => 'Personal software engineering blog by Rajakumar.',
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Person',
                    'name' => 'Rajakumar',
                    'url' => Seo::BASE_URL,
                    'sameAs' => [
                        'https://github.com/Rajakumardev',
                    ],
                ],
            ],
        ]);
    }
}
