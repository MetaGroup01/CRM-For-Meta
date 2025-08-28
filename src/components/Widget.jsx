export default function Widget({ title, children, right = null, className = '' }) {
  return (
    <div className={`rounded-xl bg-[#0A2336]/90 border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,.25)] p-4 min-h-40 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-wide text-white">{title}</div>
        {right}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}
