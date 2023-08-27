import Link from "next/link";
import NavItems from "./NavItems";
import { Logo } from "../svgs";

export type NavigationItem = {
  id: number;
  title: string;
  path: string;
};

const items: NavigationItem[] = [
  {
    id: 1,
    title: "Estimator",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-center border-t border-t-secondary/30 lg:flex-col lg:min-h-screen lg:border-t-0 lg:border-r lg:border-r-secondary/10">
      <Link
        href="/"
        className="hidden lg:flex lg:basis-1/6 lg:justify-center lg:items-center"
      >
        <Logo className="text-5xl fill-yellow-500/80" />
      </Link>
      <div className="flex w-full justify-center basis-5/6 lg:flex-col lg:justify-normal lg:p-5">
        <NavItems items={items} />
      </div>
    </nav>
  );
};

export default Navbar;
