@extends('layouts.app')

@section('content')
    <article class="mx-auto max-w-3xl py-8 sm:py-12">
        <header class="mb-8 space-y-4">
            <a href="{{ route('blog.index') }}" class="link link-primary">Back to blog</a>
            <h1 class="text-3xl font-black leading-tight sm:text-5xl">{{ $post->title }}</h1>
            <time datetime="{{ $post->isoDate() }}" class="text-sm uppercase tracking-wide text-secondary">{{ $post->formattedDate() }}</time>
            <img src="{{ $post->featuredImage }}" alt="{{ $post->title }}" class="h-auto w-full rounded-box border border-base-300 object-cover shadow-xl">
        </header>

        <div class="prose prose-invert max-w-none prose-headings:text-base-content prose-a:text-primary prose-code:text-secondary">
            {!! $post->html !!}
        </div>
    </article>
@endsection
