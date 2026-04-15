@extends('layouts.app')

@section('content')
    <section class="py-8 sm:py-10">
        <h1 class="text-3xl font-black sm:text-4xl">All Posts</h1>
        <p class="mt-2 text-base-content/80">{{ $posts->count() }} article{{ $posts->count() === 1 ? '' : 's' }} published.</p>
    </section>

    <section class="pb-14">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            @foreach($posts as $post)
                <x-post-card :post="$post" />
            @endforeach
        </div>
    </section>
@endsection
