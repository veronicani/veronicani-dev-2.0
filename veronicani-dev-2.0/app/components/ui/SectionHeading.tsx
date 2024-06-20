import { dm_serif } from "../../ui/fonts";

type tSectionHeadingProps = { heading: string };

export default function SectionHeading({ heading }: tSectionHeadingProps) {
  return (
    <h3 className={`${dm_serif.className} text-xl`}>
      {heading}
    </h3>
  );
}