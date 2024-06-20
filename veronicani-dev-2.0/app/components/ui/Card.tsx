
type tCardProps = { className: string, children: React.ReactNode }

export default function Card({ className, children }: tCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}