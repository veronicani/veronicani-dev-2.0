"use client";
import { useState } from "react";
/** A credential that can be copied to clipboard.
 *
 * Props:
 * - credential: username / password / email
 */
type tCredentialsCopyProps = { credential: string; classes: string };
export default function CredentialsCopy({
  classes,
  credential,
}: tCredentialsCopyProps) {
  const [hoverText, setHoverText] = useState("Copy");
  const [isActive, setIsActive] = useState(false);

  /** copyText: copies text into clipboard on click, and sets hover text to
   * show 'Copied!'. After 1 sec, reverts back to display "Copy".
   * Hover text will display when isActive is true, and hide when isActive is
   * false.
   */
  function copyText(text: string) {
    navigator.clipboard.writeText(text);
    setHoverText("Copied!");
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      setHoverText(() => "Copy");
    }, 1000);
  }

  return (
    <div
      className={`${classes} group/creds inline-flex cursor-pointer justify-center rounded border border-2 border-gray-400 transition lg:hover:bg-gray-400`}
      onClick={() => copyText(credential)}
    >
      <span
        className={`${isActive ? "inline" : "hidden"} absolute text-blue-500 transition-all lg:group-hover/creds:inline lg:group-hover/creds:text-white`}
      >
        {hoverText}
      </span>
      <span
        className={`${isActive ? "opacity-0" : "opacity-100"} text-blue-500 transition-all lg:group-hover/creds:opacity-0`}
      >
        {credential}
      </span>
    </div>
  );
}
