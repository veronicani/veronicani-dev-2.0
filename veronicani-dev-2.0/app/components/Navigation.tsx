"use client";
import { NAV_ITEMS } from "../lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
/** Navigation menu. */
export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex md:flex-col">
      {NAV_ITEMS.map((link) => (
        <li
          key={link.name}
          //TODO: check if this method works to style active links
          //https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#checking-active-links
        >
          <Link
            href={`/${link.href}`} //FIXME: not scrolling to section
            className={`text-gray-dark ${
              pathname === `/#${link.name}` ? "active" : ""
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
