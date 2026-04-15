<?php

namespace App\Http\Controllers;

use App\Services\PostRepository;
use App\Support\Seo;

class BlogController extends Controller
{
    public function index(PostRepository $posts)
    {
        $allPosts = $posts->all();

        return view('blog.index', [
            'posts' => $allPosts,
            'seo' => Seo::page(
                title: 'Blog',
                description: 'All articles by Rajakumar about software engineering, JavaScript, backend, and architecture.',
                path: '/blog',
            ),
            'jsonLd' => [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Blog',
                    'name' => Seo::SITE_NAME,
                    'url' => Seo::BASE_URL.'/blog',
                    'description' => 'Technical articles by Rajakumar.',
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'BreadcrumbList',
                    'itemListElement' => [
                        [
                            '@type' => 'ListItem',
                            'position' => 1,
                            'name' => 'Home',
                            'item' => Seo::BASE_URL,
                        ],
                        [
                            '@type' => 'ListItem',
                            'position' => 2,
                            'name' => 'Blog',
                            'item' => Seo::BASE_URL.'/blog',
                        ],
                    ],
                ],
            ],
        ]);
    }

    public function show(string $slug, PostRepository $posts)
    {
        $post = $posts->findBySlug($slug);

        abort_if(! $post, 404);

        return view('blog.show', [
            'post' => $post,
            'seo' => Seo::post($post),
            'jsonLd' => [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'BlogPosting',
                    'headline' => $post->title,
                    'description' => $post->metaDescription,
                    'datePublished' => $post->isoDate(),
                    'dateModified' => $post->isoDate(),
                    'image' => $post->featuredImage,
                    'mainEntityOfPage' => Seo::BASE_URL.$post->url(),
                    'author' => [
                        '@type' => 'Person',
                        'name' => 'Rajakumar',
                        'url' => Seo::BASE_URL,
                    ],
                    'publisher' => [
                        '@type' => 'Person',
                        'name' => 'Rajakumar',
                        'url' => Seo::BASE_URL,
                    ],
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'BreadcrumbList',
                    'itemListElement' => [
                        [
                            '@type' => 'ListItem',
                            'position' => 1,
                            'name' => 'Home',
                            'item' => Seo::BASE_URL,
                        ],
                        [
                            '@type' => 'ListItem',
                            'position' => 2,
                            'name' => 'Blog',
                            'item' => Seo::BASE_URL.'/blog',
                        ],
                        [
                            '@type' => 'ListItem',
                            'position' => 3,
                            'name' => $post->title,
                            'item' => Seo::BASE_URL.$post->url(),
                        ],
                    ],
                ],
            ],
        ]);
    }
}
