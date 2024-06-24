/** ButtonLink component. Link that is styled like a button */
type tButtonLinkProps = {
  icon: string;
  text: string;
  url: string;
};

export default function ButtonLink({ icon, text, url }: tButtonLinkProps) {
  return (
    <div className="inline-block bg-blue-500 text-white rounded py-3 px-5
    hover:bg-blue-600">
      <a
        href={url}
        className="flex gap-1"
      >
        <i className={`bi ${icon}`}></i>
        {text}
      </a>
    </div>
  );
}
