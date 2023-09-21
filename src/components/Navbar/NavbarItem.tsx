import Link from 'next/link';

type Props = {
	href: string;
	text: string;
};

export const NavbarItem = ({ href = '/', text = '' }: Props) => {
	return (
		<Link
			className="dark:text-white text-green-950 hover:dark:bg-white 
			hover:dark:text-green-950 hover:text-white hover:bg-green-950 duration-200
			p-2 rounded-md font-semibold"
			href={href}
		>
			{text}
		</Link>
	);
};
