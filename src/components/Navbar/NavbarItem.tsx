import Link from 'next/link';

type Props = {
	href: string;
	text: string;
};

export const NavbarItem = ({ href = '/', text = '' }: Props) => {
	return (
		<Link
			className="text-white hover:bg-white 
			hover:text-green-950  duration-200
			p-2 rounded-md font-semibold"
			href={href}
		>
			{text}
		</Link>
	);
};
