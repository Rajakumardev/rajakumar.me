import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '👋 Rajakumar',
	description:
		'Hi rajakumar here, i have been creating web apps and android apps since 2010. i created this blog to share my learning.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={jost.className}>{children}</body>
		</html>
	);
}
