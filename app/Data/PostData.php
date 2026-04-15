<?php

namespace App\Data;

use Carbon\CarbonImmutable;

final readonly class PostData
{
    public function __construct(
        public string $slug,
        public string $title,
        public CarbonImmutable $date,
        public string $featuredImage,
        public string $metaDescription,
        public string $markdown,
        public string $html,
    ) {
    }

    public function url(): string
    {
        return '/posts/'.$this->slug;
    }

    public function isoDate(): string
    {
        return $this->date->toDateString();
    }

    public function formattedDate(): string
    {
        return $this->date->format('F j, Y');
    }
}
