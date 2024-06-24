type tCardProps = { className: string; children: React.ReactNode };

export default function Card({ className, children }: tCardProps) {
  return (
    <>
    <li
      className={`${className} group flex flex-col gap-1 py-4
      lg:group-hover/list:opacity-50 lg:hover:!opacity-100 
      lg:p-6 lg:-ml-6 lg:hover:shadow-xl lg:rounded-lg
      transition motion-reduce:transition-none`}
    >
      {children}
    </li>
    <div className="h-2 bg-gray-200 -mx-5 lg:hidden"></div>
    </>
  );
}
