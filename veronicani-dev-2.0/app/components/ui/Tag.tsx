/** Tag component. */
export default function Tag({ tag }: { tag: string }) {
  return (
    <div
      className="px-3 py-1 rounded-full outline outline-2 outline-primary-blue 
      text-xs text-primary-blue font-bold"
    >
      {tag}
    </div>
  );
}
