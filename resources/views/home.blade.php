@extends('layouts.app')

@section('content')
    <section class="hero min-h-[68vh] rounded-box bg-hero-pattern p-8 sm:p-12">
        <div class="hero-content text-center">
            <div class="max-w-3xl space-y-6">
                <p class="text-sm uppercase tracking-[0.25em] text-secondary">Software Engineering Blog</p>
                <h1 class="text-4xl font-black leading-tight sm:text-6xl">Rajakumar writes about building practical, scalable products</h1>
                <p class="text-base text-base-content/80 sm:text-lg">Deep dives on backend APIs, frontend architecture, performance, and lessons from shipping real products.</p>
                <div class="flex items-center justify-center gap-3">
                    <a href="#featured" class="btn btn-primary">Read featured posts</a>
                    <a href="{{ route('blog.index') }}" class="btn btn-outline">Browse all posts</a>
                </div>
            </div>
        </div>
    </section>

    <section id="featured" class="py-14">
        <div class="mb-8 flex items-center justify-between">
            <h2 class="text-2xl font-bold sm:text-3xl">Featured Posts</h2>
            <a href="{{ route('blog.index') }}" class="link link-primary">View all</a>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            @foreach($posts as $post)
                <x-post-card :post="$post" />
            @endforeach
        </div>
    </section>
@endsection
