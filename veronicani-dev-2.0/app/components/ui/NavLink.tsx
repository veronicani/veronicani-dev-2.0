import { tNavItem } from "@/app/lib/types";
import Link from "next/link";
import useHash from "../hooks/useHash";

export default function NavLink({link}: {link: tNavItem}) {
const isActive = link.href === useHash();

  return (
    <Link
      href={`${link.href}`}
      className={`text-gray-dark flex items-center gap-2
        ${isActive ? "font-bold" : ""}`}
    >
      <span>{link.name}</span>
    </Link>
  );
}
