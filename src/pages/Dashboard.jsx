import MetricCard from '../components/MetricCard.jsx'
import Widget from '../components/Widget.jsx'
import RainbowArcsChart from '../components/RainbowArcsChart.jsx'
import logo from '../assets/images/logo.png'

export default function Dashboard() {
  return (
    <div className="text-blue-50">
      {/* Top inline header: logo left, full-width search center, Event button right */}
      <div className="flex pb-16 items-center gap-4">
        <img src={logo} alt="Logo" className="h-10 w-auto drop-shadow" />
        <div className="relative flex-1">
          {/* Search icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/90 drop-shadow">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.27 11.97l3.76 3.76a.75.75 0 1 0 1.06-1.06l-3.76-3.76A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border border-[#B6D6F5]/80 bg-[linear-gradient(90deg,#10679D_0%,#1A7FB7_50%,#0F5E95_100%)] pl-10 pr-3 py-2.5 text-sm text-white placeholder-white/90 outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_1px_1px_rgba(0,0,0,0.2)]"
          />
          {/* inner subtle line to mimic double border */}
          <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-white/20"></div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-black/85 hover:bg-black text-white font-semibold px-4 py-2 shadow-md shadow-black/30">
          {/* calendar/event icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 1 1 2 0v1zm13 7H4v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9zM5 8h14V6a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0V5H8v1a1 1 0 1 1-2 0V5H5a1 1 0 0 0-1 1v2z"/>
          </svg>
          Event
        </button>
      </div>
      
      {/* Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-[34px] leading-none font-semibold tracking-tight text-gray-900">basitchunawala786</h1>
        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[12px]">
          {['Today','Yesterday','Week','Month','🕒 Time','All','Select user'].map((t, i) => (
            <button
              key={t + i}
              className={`rounded-full border px-3 py-1.5 bg-white text-gray-700 border-gray-200 hover:text-gray-900 ${
                t.includes('Week') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {t}
            </button>
          ))}
          <button className="ml-2 rounded-full border px-3 py-1.5 bg-white text-gray-700 border-gray-200 hover:text-gray-900">⚙️ Setup</button>
        </div>
      </div>

      {/* Top section: 2 big sides, 4 small center */}
      <div className="mt-6 grid grid-cols-12 gap-4 lg:auto-rows-[170px]">
        {/* Left big widget (row-span-2) */}
        <div className="col-span-12 lg:col-span-4 lg:row-span-2">
          <Widget title="Incoming messages" right={<span className="text-xs text-blue-100/60">this week</span>} className="h-full">
            <div className="text-emerald-400 text-3xl font-semibold">0</div>
            <div className="mt-4 text-sm text-blue-100/70">Live chat</div>
            <div className="mt-1 h-1 rounded bg-white/10">
              <div className="h-full w-1/3 bg-emerald-400 rounded" />
            </div>
          </Widget>
        </div>

        {/* Middle 4 small cards in 2x2 grid */}
        <div className="col-span-12 lg:col-span-4 lg:row-span-2 grid grid-cols-2 grid-rows-2 gap-4 auto-rows-[170px]">
          <div>
            <MetricCard title="Ongoing conversations" valueClass="text-violet-400" className="h-full" />
          </div>
          <div>
            <MetricCard title="Unanswered conversations" valueClass="text-violet-400" className="h-full" />
          </div>
          <div>
            <MetricCard title="Median reply time" valueClass="text-emerald-400" className="h-full" />
          </div>
          <div>
            <MetricCard title="Longest awaiting reply" valueClass="text-violet-400" className="h-full" />
          </div>
        </div>

        {/* Right big widget (row-span-2) */}
        <div className="col-span-12 lg:col-span-4 lg:row-span-2">
          <Widget title="Lead sources" right={<span className="text-amber-300 text-xs">Not enough data to display</span>} className="h-full relative overflow-hidden">
            <RainbowArcsChart
              percents={[100,100,100,100]}
              sizeClass="w-[360px] h-[360px] md:w-[220px] md:h-[220px]"
              rotateDeg={-140}
            />
            <div className="h-24 rounded bg-white/5/0" />
          </Widget>
        </div>

        {/* Bottom section (Option A): Left 4 small, Middle 1 big, Right empty to mirror top */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:auto-rows-[170px]">
          {/* Left: 4 small cards in 2x2 (same size as top smalls) */}
          <div className="col-span-12 lg:col-span-4 lg:row-span-2 grid grid-cols-2 grid-rows-2 gap-4 auto-rows-[170px]">
            <div>
              <MetricCard title="Won leads" className="h-full" />
            </div>
            <div>
              <MetricCard title="Active leads" className="h-full" />
            </div>
            <div>
              <MetricCard title="Lost leads" className="h-full" />
            </div>
            <div>
              <MetricCard title="Leads without tasks" className="h-full" />
            </div>
          </div>
          {/* Middle: big Tasks spanning two rows (same size as top big) */}
          <div className="col-span-12 lg:col-span-4 lg:row-span-2">
            <Widget title="Tasks" className="h-full">
              <div className="h-24 rounded bg-white/5" />
            </Widget>
          </div>
          {/* Right: empty spacer to mirror top layout */}
          <div className="hidden lg:block lg:col-span-4 lg:row-span-2" />
        </div>
        {/* Bottom spacer for breathing room */}
        <div className="h-10 sm:h-12 md:h-16" />
      </div>
    </div>
  )
}
