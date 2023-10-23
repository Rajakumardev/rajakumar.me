import { allPosts } from 'contentlayer/generated';
import { url } from 'inspector';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const domain = 'https://rajakumar.me';
	const posts = allPosts;
	const staticPages = [
		{
			url: `${domain}`,
			lastModified: new Date(),
			priority: 0.5,
		},
		{
			url: `${domain}/blog`,
			lastModified: new Date(),
			priority: 1,
		},
	];
	const postSitemap = allPosts.map((post) => {
		return {
			url: `${domain}${post.url}`,
			lastModified: post.date,
			priority: 1,
		};
	});
	return [...staticPages, ...postSitemap];
}
