import Link from 'next/link';

type Props = {
	title: string;
};

export const Footer = ({ title = '' }: Props) => {
	return (
		<div className="h-20 flex justify-center items-center">
			<p className="text-white ">{title}</p>
		</div>
	);
};
