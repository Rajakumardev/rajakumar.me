import { textLimitter } from '@/utils';
import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export const PostCard = (post: Post) => {
	return (
		<Link href={post.url} className="md:w-[48%] w-full min-h-[10rem]">
			<div className="mb-8 border-2 border-dashed rounded-md p-4 flex gap-4 flex-col lg:flex-row h-full">
				<img
					src={post.featuredImage}
					alt={post.title}
					className=" w-full lg:w-1/4 md:h-full h-1/4 rounded-md object-cover"
				/>
				<div className="">
					<h2 className="mb-1 text-2xl lg:text-3xl text-white">
						{textLimitter(post.title, 50)}
					</h2>
					<time dateTime={post.date} className="mb-2 text-xs text-gray-300">
						{format(parseISO(post.date), 'LLLL d, yyyy')}
					</time>
				</div>
			</div>
		</Link>
	);
};
