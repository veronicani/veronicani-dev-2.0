type tSectionHeadingProps = { heading: string };
/** SectionHeading: Styling for section heading. */
export default function SectionHeading({ heading }: tSectionHeadingProps) {
  return (
    <h3>
      {heading}
    </h3>
  );
}