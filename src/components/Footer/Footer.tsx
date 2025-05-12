import Link from 'next/link';

type Props = {
	title: string;
};

export const Footer = ({ title = '' }: Props) => {
	return (
		<div className="h-20 flex flex-col md:flex-row justify-center items-center gap-4">
			<p className="text-white ">{title}</p>
			<div className="flex flex-col md:flex-row items-center justify-center gap-4">
				<h3 className="text-white">Other Projects :</h3>
				<a
					href="https://testmic.app"
					target="_blank"
					className="text-white underline"
				>
					Testmic.app
				</a>
				<a
					href="https://penandpoetry.com"
					target="_blank"
					className="text-white underline"
				>
					Pen and Poetry Blog
				</a>
			</div>
		</div>
	);
};
