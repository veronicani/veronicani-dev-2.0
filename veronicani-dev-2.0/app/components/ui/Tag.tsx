/** Tag component. */
export default function Tag({ tag }: { tag: string }) {
  return (
    <div
      className="px-3 py-1 rounded-full border border-2 border-blue-500/70 
      text-sm text-blue-500 font-bold font-mono"
    >
      {tag}
    </div>
  );
}
