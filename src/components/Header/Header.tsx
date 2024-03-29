import Link from 'next/link';

type Props = {
	title: string;
	icon: string;
	children: JSX.Element[] | JSX.Element;
};

export const Header = ({ title = '', icon = '', children = [] }: Props) => {
	return (
		<div className="h-40 md:h-20 flex flex-col justify-center md:flex-row md:justify-between">
			<Link href={'/'} className="flex items-center w-28">
				<p
					className=" text-2xl border-white border-4 rounded-full
            mr-4 p-1 border-dotted"
				>
					{icon}
				</p>
				<h1 className="text-white text-2xl">{title}</h1>
			</Link>
			<div className="flex justify-start mt-10 md:mt-0 md:justify-end items-center">
				{children}
			</div>
		</div>
	);
};
