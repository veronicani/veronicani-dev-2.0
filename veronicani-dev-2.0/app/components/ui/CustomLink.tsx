import Link from "next/link";

type tCustomLinkProps = {
  displayText: string;
  url: string;
};

/** Custom Link component. */
export default function CustomLink({ displayText, url }: tCustomLinkProps) {
  return (
    <div className="text-primary-blue hover:underline decoration-2">
      <a href={url}>
        {displayText}
        <i
          className="bi-box-arrow-up-right ml-1 text-primary-blue"
        ></i>
      </a>
    </div>
  );
}
