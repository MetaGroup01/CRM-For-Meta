import data from '../data/chats.json'

export default function Chats() {
  const threads = data.threads
  const activeId = threads[0]?.id
  const messages = data.messages[String(activeId)] || []

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
        <div className="border-b border-white/10 px-3 py-2 text-sm text-blue-50/80">Threads</div>
        <ul className="divide-y divide-white/10 text-sm">
          {threads.map((t) => (
            <li key={t.id} className={`px-3 py-2 hover:bg-white/5 ${t.id === activeId ? 'bg-white/5' : ''}`}>
              <div className="text-blue-50">{t.name}</div>
              <div className="text-blue-50/70 text-xs">{t.lastMessage} · {t.time}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-8 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
        <div className="border-b border-white/10 px-3 py-2 text-sm text-blue-50/80">Conversation</div>
        <div className="p-3 space-y-2 text-sm">
          {messages.map((m, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs">{m.from[0]}</span>
              <div>
                <div className="text-blue-50/90"><span className="font-medium text-blue-50">{m.from}</span> · {m.time}</div>
                <div className="text-blue-50/80">{m.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
