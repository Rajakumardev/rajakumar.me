import { Section } from '@/components';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex flex-col items-center w-full scroll-smooth">
			<section className="w-full flex flex-col justify-center gap-10 h-screen items-center -m-20 relative -z-10">
				{/* <img src="" alt="rajakumar.me"/> */}
				<div className="border-dashed p-6 rounded-xl">
					<p className="dark:text-white text-green-950 text-center sm:text-2xl md:text-5xl">
						👋, I am Rajakumar, an expirenced fullstack javascript developer!
					</p>
				</div>
				<a
					href="#content"
					className="border-2 animate-bounce dark:border-white border-green-950 border-dotted rounded-full p-4 text-2xl absolute bottom-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10  dark:fill-white fill-green-950"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</a>
			</section>
			<Section className="m-24 w-full" id="content">
				<h2 className="dark:text-white text-green-950 text-2xl md:text-3xl font-bold">
					Featured
				</h2>
			</Section>
		</main>
	);
}
