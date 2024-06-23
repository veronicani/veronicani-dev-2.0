type tSectionHeadingProps = { heading: string };
/** SectionHeading: Styling for section heading. */
export default function SectionHeading({ heading }: tSectionHeadingProps) {
  return (
    <h3 className="text-7xl pb-5 text-gray-dark">
      {heading}
    </h3>
  );
}