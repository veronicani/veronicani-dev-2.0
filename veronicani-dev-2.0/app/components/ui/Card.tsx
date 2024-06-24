type tCardProps = { className: string; children: React.ReactNode };

export default function Card({ className, children }: tCardProps) {
  return (
    <>
    <li
      className={`${className} group flex flex-col gap-1 p-4
      border-b-4 md:border-b-2 lg:border-b-0 border-gray-200 -mx-4 lg:-mx-0
      lg:group-hover/list:opacity-50 lg:hover:!opacity-100 
      lg:p-6 lg:-ml-6 lg:hover:shadow-xl lg:rounded-lg
      transition motion-reduce:transition-none`}
    >
      {children}
    </li>
    {/* <hr className="h-2 md:h-1 bg-gray-200 w-screen -mx-6 lg:hidden last-of-type:hidden"></hr> */}
    </>
  );
}
