<!doctype html>
<html lang="en" data-theme="rkneon">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ ($seo['title'] ?? 'Rajakumar Blog') . ' | Rajakumar' }}</title>
    <meta name="description" content="{{ $seo['description'] ?? 'Technical blog by Rajakumar.' }}">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <link rel="canonical" href="{{ $seo['canonical'] ?? 'https://rajakumar.me' }}">

    <meta property="og:site_name" content="Rajakumar Blog">
    <meta property="og:type" content="{{ $seo['ogType'] ?? 'website' }}">
    <meta property="og:title" content="{{ $seo['title'] ?? 'Rajakumar Blog' }}">
    <meta property="og:description" content="{{ $seo['description'] ?? 'Technical blog by Rajakumar.' }}">
    <meta property="og:url" content="{{ $seo['canonical'] ?? 'https://rajakumar.me' }}">
    @if(!empty($seo['image']))
        <meta property="og:image" content="{{ $seo['image'] }}">
    @endif

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $seo['title'] ?? 'Rajakumar Blog' }}">
    <meta name="twitter:description" content="{{ $seo['description'] ?? 'Technical blog by Rajakumar.' }}">
    @if(!empty($seo['image']))
        <meta name="twitter:image" content="{{ $seo['image'] }}">
    @endif

    <meta name="google-site-verification" content="5txZwkAUwhgDgll3sWgdtziT1CMrXDejLOErZqCW65I">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=space-grotesk:400,500,700|sora:400,600,700" rel="stylesheet" />

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    @foreach(($jsonLd ?? []) as $schema)
        <script type="application/ld+json">{!! json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) !!}</script>
    @endforeach

    <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="aa98429f-269f-4583-a607-7dd11689711b" async></script>
</head>
<body class="min-h-screen bg-base-100 text-base-content antialiased">
    <div class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <header class="navbar py-5">
            <div class="navbar-start">
                <a href="{{ route('home') }}" class="btn btn-ghost text-xl tracking-wide">RK</a>
            </div>
            <nav class="navbar-end gap-2">
                <a href="{{ route('home') }}" class="btn btn-sm btn-ghost">Home</a>
                <a href="{{ route('blog.index') }}" class="btn btn-sm btn-primary">Blog</a>
                <a href="https://github.com/Rajakumardev" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">GitHub</a>
            </nav>
        </header>

        <main class="flex-1">
            @yield('content')
        </main>

        <footer class="footer footer-center border-t border-base-300 py-8 text-sm text-base-content/80">
            <aside>
                <p>Made by Rajakumar</p>
                <p>
                    <a href="https://testmic.app" target="_blank" rel="noopener noreferrer" class="link">Testmic.app</a>
                    <span class="mx-2">|</span>
                    <a href="https://penandpoetry.com" target="_blank" rel="noopener noreferrer" class="link">Pen and Poetry</a>
                    <span class="mx-2">|</span>
                    <a href="https://flesch-kincaid-calculator.com/" target="_blank" rel="noopener noreferrer" class="link">Flesch Kincaid</a>
                </p>
            </aside>
        </footer>
    </div>
</body>
</html>
