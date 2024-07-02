import Image from "next/image";

/** BrandLogo component. Applies styling to logo svg. */
type tBrandLogoProps = {
  path: string,
  alt: string,
  height: number,
  width: number,
}
export default function BrandLogo({ path, alt, height, width }: tBrandLogoProps) {
  return (
    <li className="">
      <Image 
        src={path}
        alt={alt}
        height={height}
        width={width}
        // className="w-full h-auto"
      />
    </li>
  );
}