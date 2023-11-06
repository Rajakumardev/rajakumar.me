// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { textLimitter } from '@/utils';

const domain = 'https://rajakumar.me';

export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post._raw.flattenedPath.toLowerCase() }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath.toLowerCase() === params.slug
	);
	if (!post) {
		throw new Error(`Post not found for slug: ${params.slug}`);
	}
	return {
		title: post.title,
		description: textLimitter(post.metaDescription, 160),
		alternates: {
			canonical: `${domain}/${post.url}`,
		},
	};
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath.toLowerCase() === params.slug
	);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	return (
		<article className="mx-auto max-w-3xl py-8">
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-bold text-white ">{post.title}</h1>
				<time dateTime={post.date} className="mt-2 text-xs text-white ">
					{format(parseISO(post.date), 'LLLL d, yyyy')}
				</time>
			</div>
			<div
				className="[&>*]:mb-3 [&>*:last-child]:mb-0 prose lg:prose-xl blog"
				dangerouslySetInnerHTML={{ __html: post.body.html }}
			/>
		</article>
	);
};

export default PostLayout;
