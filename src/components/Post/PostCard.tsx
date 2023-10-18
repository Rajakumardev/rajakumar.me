import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export const PostCard = (post: Post) => {
	return (
		<Link href={post.url} className="w-1/2">
			<div className="mb-8 border-2 border-dashed rounded-md p-4 flex gap-4">
				<img
					src={post.featuredImage}
					alt={post.title}
					className="w-44 rounded-md"
				/>
				<div className="">
					<h2 className="mb-1 text-3xl text-green-950 dark:text-white">
						{post.title}
					</h2>
					<time
						dateTime={post.date}
						className="mb-2 block text-xs text-gray-300"
					>
						{format(parseISO(post.date), 'LLLL d, yyyy')}
					</time>
				</div>
			</div>
		</Link>
	);
};
