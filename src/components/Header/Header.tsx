type Props = {
	title: string;
	icon: string;
	children: JSX.Element[] | JSX.Element;
};

export const Header = ({ title = '', icon = '', children = [] }: Props) => {
	return (
		<div className="h-20 flex justify-between">
			<div className="flex items-center w-28">
				<p
					className=" text-2xl dark:border-white border-green-950 border-4 rounded-full
            mr-4 p-1 border-dotted"
				>
					{icon}
				</p>
				<h1 className="dark:text-white text-2xl">{title}</h1>
			</div>
			<div className="flex justify-end items-center">{children}</div>
		</div>
	);
};
