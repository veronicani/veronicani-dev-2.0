import { tNavItem } from "@/app/lib/types";
import Link from "next/link";
import useHash from "../hooks/useHash"; //unused after implementing useObserver
import useObserver from "../hooks/useObserver";
import applyPrefix from "../helpers/applyPrefix";
import styles from "./NavLink.module.css";

export default function NavLink({ link }: { link: tNavItem }) {
  const isActive = link.href === useObserver();

  const navIndicatorInactive = "w-2 bg-gray-400";
  const navIndicatorActive = "w-12 bg-blue-500";
  // applies 'group-hover' prefix to active classes for tailwind
  // w-12 bg-blue-500 -> group-hover:w-12 group-hover:bg-blue-500
  const navIndicatorHover = applyPrefix("group-hover", "bg-blue-500");

  const navTextInactive = "text-gray-dark";
  const navTextActive = "font-bold text-blue-500";
  const navTextHover = applyPrefix("group-hover", navTextActive);

  return (
    <Link
      href={`${link.href}`}
      className={`group flex items-center gap-2 ${styles["spin-hover"]}`}
    >
      <div
        className={`nav-cross flex items-center ${!isActive ? styles["spin-element"] : ""}`}
      >
        <span
          className={`z-1 absolute start-1 h-2 w-[2px] -translate-x-1/2 rounded transition-all ${navIndicatorHover} motion-reduce:transition-none ${
            isActive ? "bg-blue-500" : "bg-gray-400"
          }`}
        ></span>
        <span
          className={`h-[2px] rounded transition-all motion-reduce:transition-none ${navIndicatorHover} ${
            isActive ? navIndicatorActive : navIndicatorInactive
          }`}
        ></span>
      </div>
      <span
        className={`transition-all motion-reduce:transition-none ${navTextHover} ${
          isActive ? navTextActive : navTextInactive
        }`}
      >
        {link.name}
      </span>
    </Link>
  );
}
