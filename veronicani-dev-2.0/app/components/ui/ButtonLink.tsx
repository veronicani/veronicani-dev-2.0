/** ButtonLink component. Link that is styled like a button */
type tButtonLinkProps = {
  icon: string,
  text: string,
  url: string,
}

export default function ButtonLink({ icon, text, url }: tButtonLinkProps) {
  return (
    <a
      className="md:w-3/4 flex" //style button here
      href={url}
    >
      <i className={`bi ${icon}`}></i>
      {text}
    </a>
  );
}
