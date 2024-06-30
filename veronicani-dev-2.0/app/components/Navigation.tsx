"use client";
import { NAV_ITEMS } from "../lib/data";
import NavLink from "./ui/NavLink";
import { usePathname } from "next/navigation";
/** Navigation menu. */
export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex lg:flex-col">
      {NAV_ITEMS.map((link) => (
        <li
          key={link.name}
          //TODO: check if this method works to style active links
          //https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#checking-active-links
        >
          <NavLink link={link} />
        </li>
      ))}
    </ul>
  );
}
