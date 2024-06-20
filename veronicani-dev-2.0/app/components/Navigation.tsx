import { NAV_ITEMS } from "../lib/data";

export default function Navigation() {
  return (
    <>
    {NAV_ITEMS.map(link => {
      <a
        key={link.name}
        href={link.href}
        className=""
      >
          <p className="">{link.name}</p>
      </a>
      })}
    </>
  );
}