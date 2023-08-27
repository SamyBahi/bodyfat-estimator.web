"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface NavItemProps extends PropsWithChildren {
  path: string;
}

const NavItem = ({ path, children }: NavItemProps) => {
  const pathname: string = usePathname();

  const isCurrentPage =
    pathname === path || (path.includes("blog") && pathname.includes(path));

  return (
    <li>
      <Link
        href={path}
        className={`flex items-center justify-center h-12 w-36 rounded-md ${
          isCurrentPage
            ? "bg-yellow-50/10 font-medium text-yellow-500/70"
            : "opacity-75 hover:opacity-100 transition-opacity"
        } lg:w-full`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
