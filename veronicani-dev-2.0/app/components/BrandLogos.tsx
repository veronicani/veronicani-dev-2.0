import BrandLogo from "./ui/BrandLogo";
import { BRAND_LOGOS } from "../lib/data";
import Image from "next/image";

/** Brand Logos. */
export default function BrandLogos() {

  return (
    <ul className="flex flex-wrap gap-5 items-center justify-center">
      {BRAND_LOGOS.map(({ name, path, id, alt, height, width }) => (
        <BrandLogo
          key={name}
          path={path}
          id={id}
          alt={alt}
          height={height}
          width={width}
        />
      ))}
    </ul>
  );
}
