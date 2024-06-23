
type tCardProps = { className: string, children: React.ReactNode }

export default function Card({ className, children }: tCardProps) {
  return (
    <div className={`${className} flex flex-col gap-1 p-9 hover:shadow-xl rounded-lg`}>
      {children}
    </div>
  )
}