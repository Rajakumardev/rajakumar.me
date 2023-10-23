type Props = {
	children: JSX.Element | JSX.Element[];
};
export const Navbar = ({ children = [] }: Props) => {
	return <nav className="flex gap-4">{children}</nav>;
};
