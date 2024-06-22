import Link from "next/link";

type tCustomLinkProps = {
  displayText: string;
  url: string;
};

/** Custom Link component. */
export default function CustomLink({ displayText, url }: tCustomLinkProps) {
  return (
    <div>
      <a href={url}>
        {displayText}
        <i
          className="bi-box-arrow-up-right"
          style={{ fontSize: "1rem", color: "cornflowerblue" }}
        ></i>
      </a>
    </div>
  );
}
