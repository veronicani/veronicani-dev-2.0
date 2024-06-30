import { tNavItem } from "@/app/lib/types";
import Link from "next/link";
import useHash from "../hooks/useHash";
import applyPrefix from "../helpers/applyPrefix";

export default function NavLink({ link }: { link: tNavItem }) {
  const isActive = link.href === useHash();

  const navIndicatorInactive = "w-[2px] bg-gray-400";
  const navIndicatorActive = "w-8 bg-blue-500";
  const navIndicatorHover = applyPrefix("group-hover", navIndicatorActive);
  
  const navTextInactive = "text-gray-dark ";
  const navTextActive = "font-bold text-blue-500";
  const navTextHover = applyPrefix("group-hover", navTextActive);

  return (
    <Link
      href={`${link.href}`}
      className="flex items-center gap-2 group "
    >
      <div
        className={`h-[2px] rounded transition-all motion-reduce:transition-none
        ${navIndicatorHover}
         ${isActive ? navIndicatorActive : navIndicatorInactive}
        `}
      ></div>
      <span
        className={`transition-all motion-reduce:transition-none
        ${navTextHover}
        ${isActive ? navTextActive : navTextInactive}`}
      >
        {link.name}
      </span>
    </Link>
  );
}
