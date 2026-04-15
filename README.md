# Rajakumar Blog

Laravel 13 markdown blog with daisyUI redesign, neon purple visual theme, and SEO-first architecture.

## Stack

- PHP 8.3+
- Laravel 13
- Tailwind CSS v4
- daisyUI v5
- League CommonMark for markdown rendering
- Spatie YAML front matter parser

## Content Source

- Markdown posts live in `content/posts/*.md`
- Front matter fields required by the blog engine:
  - `title`
  - `date` (`YYYY-MM-DD`)
  - `featuredImage`
  - `metaDescription`

## Routes

- `/` home page with featured posts
- `/blog` all posts
- `/posts/{slug}` individual post pages
- `/sitemap.xml` dynamic sitemap
- `/robots.txt` crawl directives and sitemap link

## SEO Features

- Canonical tags on all pages
- Open Graph and Twitter Card metadata
- JSON-LD schema:
  - `WebSite`
  - `Person`
  - `Blog`
  - `BlogPosting`
  - `BreadcrumbList`
- XML sitemap with post URLs
- Robots directives with sitemap reference

## Security Features

- Strict security headers middleware:
  - Content Security Policy
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy
  - HSTS when HTTPS
- Markdown raw HTML stripping to reduce XSS risk

## Local Development

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run dev
php artisan serve
```

## Production Build

```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
