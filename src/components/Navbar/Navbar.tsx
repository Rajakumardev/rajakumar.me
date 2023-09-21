import { NavbarItem } from './NavbarItem';
type Props = {
	children: JSX.Element | JSX.Element[];
};
export const Navbar = ({ children = [] }) => {
	return <nav>{children}</nav>;
};
