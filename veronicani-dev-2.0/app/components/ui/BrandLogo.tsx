import Image from "next/image";
// import AMKLogo from 'public/static/logos_edit/america-test-kitchen_logo.svg'
/** BrandLogo component. Applies styling to logo svg. */
type tBrandLogoProps = {
  path: string;
  id: string;
  alt: string;
  height: number;
  width: number;
};
export default function BrandLogo({
  path,
  id,
  alt,
  height,
  width,
}: tBrandLogoProps) {
  return (
    <li className="brand-logo">
      <Image
        src={path}
        alt={alt}
        height={height}
        width={width}
      />
    </li>
  );
}
