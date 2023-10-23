import { Footer, Header, Navbar, NavbarItem } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';

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
			<body className={`${jost.className} bg-green-950 px-8`}>
				<Script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token="aa98429f-269f-4583-a607-7dd11689711b"
					async
				/>
				<NextTopLoader
					color="#ffffff"
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={200}
					shadow="0 0 10px #ffffff,0 0 5px #ffffff"
				/>
				<Header icon="😸" title="RK">
					<Navbar>
						<NavbarItem text="Home" href="/" />
						<NavbarItem text="Blog" href="/blog" />
						<NavbarItem
							text="Github"
							target="_blank"
							href="https://github.com/Rajakumardev"
						/>
					</Navbar>
				</Header>
				{children}
				<Footer title="Made with 💚 by rajakumar"></Footer>
			</body>
		</html>
	);
}
