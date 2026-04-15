@props(['post'])

<article class="card border border-base-300 bg-base-200/60 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <figure class="aspect-video overflow-hidden">
        <img src="{{ $post->featuredImage }}" alt="{{ $post->title }}" class="h-full w-full object-cover">
    </figure>
    <div class="card-body gap-3">
        <time datetime="{{ $post->isoDate() }}" class="text-xs uppercase tracking-wide text-secondary">{{ $post->formattedDate() }}</time>
        <h2 class="card-title text-xl leading-tight">
            <a href="{{ $post->url() }}" class="link link-hover">{{ $post->title }}</a>
        </h2>
        <p class="text-sm text-base-content/80">{{ $post->metaDescription }}</p>
    </div>
</article>
