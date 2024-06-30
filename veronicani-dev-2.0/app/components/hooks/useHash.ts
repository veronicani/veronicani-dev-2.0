'use client';

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

// Refer to: https://github.com/vercel/next.js/discussions/49465

/** getHash: Gets the hash fragment of URL when it is client-side (i.e. window
 * is not undefined) or returns undefined if it is currently being rendered
 * server-side.
 */
const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : undefined;

/** useHash: Updates state with current hash everytime the params change.
 * Returns the hash.
 */
const useHash = () => {
  const [hash, setHash] = useState(getHash());
  const [isClient, setIsClient] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsClient(true);
    setHash(getHash());
  }, [params]); //params is a new object each time

  return isClient ? hash : null;
};

export default useHash;