import Link from 'next/link';

type Props = {
	href: string;
	text: string;
};

export const NavbarItem = ({ href = '/', text = '' }: Props) => {
	return <Link href={href}>{text}</Link>;
};
