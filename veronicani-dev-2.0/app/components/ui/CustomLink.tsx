import Link from "next/link";

type tCustomLinkProps = {
  displayText: string;
  url: string;
};

/** Custom Link component. */
export default function CustomLink({ displayText, url }: tCustomLinkProps) {
  return (
    <div className="text-blue-500 hover:underline decoration-2 font-mono">
      <a href={url}>
        {displayText}
        <i
          className="bi-box-arrow-up-right ml-1 text-blue-500"
        ></i>
      </a>
    </div>
  );
}
