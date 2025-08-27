export default function MetricCard({ title, value = 0, subtitle = 'this week', valueClass = 'text-blue-300', className = '' }) {
  return (
    <div className={`rounded-xl bg-[#0A2336]/90 border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,.25)] p-4 ${className}`}>
      <div className="text-[11px] uppercase tracking-wide text-white">{title}</div>
      <div className="mt-2 flex items-end gap-2">
        <div className={`text-3xl font-semibold ${valueClass}`}>{value}</div>
      </div>
      <div className="mt-4 h-0.5 w-12 bg-white/20 rounded" />
      <div className="mt-2 text-[11px] text-blue-100/60">{subtitle}</div>
    </div>
  )
}
