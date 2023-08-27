import NavItem from "./NavItem";
import { NavigationItem } from "./Navbar";

type NavItemsProps = {
  items: NavigationItem[];
};

const NavItems = ({ items }: NavItemsProps) => {
  return (
    <ul className="flex space-x-5 lg:flex-col lg:space-x-0">
      {items.map((item: NavigationItem) => (
        <NavItem key={item.id} path={item.path}>
          {item.title}
        </NavItem>
      ))}
    </ul>
  );
};

export default NavItems;
