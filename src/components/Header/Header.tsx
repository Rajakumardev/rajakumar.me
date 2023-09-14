type Props = {
	title: string;
	icon: string;
};

export const Header = ({ title = '', icon = '' }: Props) => {
	return (
		<div className="h-20 flex items-center">
			<p
				className=" text-2xl dark:border-white border-green-950 border-4 rounded-full
            mr-4 p-1 border-dotted"
			>
				{icon}
			</p>
			<h1 className="dark:text-white text-2xl">{title}</h1>
		</div>
	);
};
