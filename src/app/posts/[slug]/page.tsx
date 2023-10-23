// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	return (
		<article className="mx-auto max-w-3xl py-8">
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-bold dark:text-white text-green-950">
					{post.title}
				</h1>
				<time
					dateTime={post.date}
					className="mt-2 text-xs dark:text-white text-green-950"
				>
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
