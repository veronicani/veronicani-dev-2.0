type tCardProps = { className: string; children: React.ReactNode };

export default function Card({ className, children }: tCardProps) {
  return (
    <>
    <li
      className={`${className} group flex flex-col gap-1 p-4
      border-b-4 md:border-b-2 lg:border-b-0 border-gray-200 last-of-type:border-b-0 -mx-4 lg:-mx-0
      lg:group-hover/list:opacity-50 lg:hover:!opacity-100 
      lg:p-6 lg:-ml-6 lg:rounded-lg
      lg:hover:-translate-y-3 lg:hover:-translate-x-3 
      lg:hover:shadow-[3px_4px_0px_3px_#2462FF] lg:hover:border-blue-500 lg:hover:border-2
      transition motion-reduce:transition-none`}
    >
      {children}
    </li>
    {/* <hr className="h-2 md:h-1 bg-gray-200 w-screen -mx-6 lg:hidden last-of-type:hidden"></hr> */}
    </>
  );
}


// lg:hover:shadow-[0_0_45px_9px_rgba(0,0,0,0.1)]