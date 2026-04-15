<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $isLocal = app()->environment('local');

        $scriptSrc = ["'self'", "'unsafe-inline'", 'https://beamanalytics.b-cdn.net'];
        $styleSrc = ["'self'", "'unsafe-inline'", 'https://fonts.bunny.net'];
        $connectSrc = ["'self'"];

        if ($isLocal) {
            $scriptSrc = [...$scriptSrc, 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://[::1]:5173'];
            $styleSrc = [...$styleSrc, 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://[::1]:5173'];
            $connectSrc = [
                ...$connectSrc,
                'http://localhost:5173',
                'http://127.0.0.1:5173',
                'http://[::1]:5173',
                'ws://localhost:5173',
                'ws://127.0.0.1:5173',
                'ws://[::1]:5173',
            ];
        }

        $csp = implode('; ', [
            "default-src 'self'",
            'script-src '.implode(' ', $scriptSrc),
            'style-src '.implode(' ', $styleSrc),
            "img-src 'self' data: https:",
            "font-src 'self' https://fonts.bunny.net",
            'connect-src '.implode(' ', $connectSrc),
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
        ]);

        if (! $isLocal) {
            $csp .= '; upgrade-insecure-requests';
        }

        $response->headers->set('Content-Security-Policy', $csp);
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

        if ($request->isSecure()) {
            $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        }

        return $response;
    }
}
