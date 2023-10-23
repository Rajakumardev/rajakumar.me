import React from 'react';

type Props = {
	className?: string;
	children: JSX.Element[] | JSX.Element;
	id: string;
};

export const Section = ({ className = '', children = [], id = '' }: Props) => {
	return (
		<section className={className} id={id}>
			{children}
		</section>
	);
};
