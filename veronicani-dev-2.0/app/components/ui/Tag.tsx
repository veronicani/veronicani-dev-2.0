/** Tag component. */
export default function Tag({ tag }: { tag: string }) {
  return (
    <div
      className="md:w-3/4 flex" //style tag width here
    >
      <p>{tag}</p>
    </div>
  );
}
