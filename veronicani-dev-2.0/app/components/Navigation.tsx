"use client";
import { NAV_ITEMS } from "../lib/data";
import NavLink from "./ui/NavLink";
import { usePathname } from "next/navigation";
/** Navigation menu. */
export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex lg:flex-col lg:gap-y-2 pb-10">
      {NAV_ITEMS.map((link) => (
        <li
          key={link.name}
        >
          <NavLink link={link} />
        </li>
      ))}
    </ul>
  );
}
