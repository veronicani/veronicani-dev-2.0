type tCardHeadingProps = { classes: string, heading: string };
/** CardHeading: Styling for card heading. */
export default function CardHeading({ classes, heading }: tCardHeadingProps) {
  return (
    <h4 className={`${classes} text-lg md:text-2xl font-bold`}>
      {heading}
    </h4>
  );
}