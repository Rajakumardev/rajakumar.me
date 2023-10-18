import { PostCard } from '@/components';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import React from 'react';

const page = () => {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date))
	);

	return (
		<main className="flex flex-col items-center w-full scroll-smooth">
			<h1 className="my-8 text-2xl dark:text-white text-green-950 w-full">
				All Posts({posts.length})
			</h1>
			<div className="w-full flex gap-4">
				{posts.map((post, idx) => (
					<PostCard key={idx} {...post} />
				))}
			</div>
		</main>
	);
};

export default page;
