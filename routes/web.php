<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/posts/{slug}', [BlogController::class, 'show'])
    ->where('slug', '.*')
    ->name('blog.show');

Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');
