import data from '../data/mail.json'

export default function Mail() {
  const folders = data.folders
  const activeFolder = folders[0]?.id || 'inbox'
  const messages = data.messages[activeFolder] || []
  const activeMsg = messages[0]

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
        <div className="border-b border-white/10 px-3 py-2 text-sm text-blue-50/80">Folders</div>
        <ul className="text-sm divide-y divide-white/10">
          {folders.map((f) => (
            <li key={f.id} className={`px-3 py-2 hover:bg-white/5 ${f.id === activeFolder ? 'bg-white/5' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="text-blue-50">{f.name}</span>
                {f.unread ? <span className="text-[10px] rounded bg-white/10 px-1.5 py-0.5 text-blue-50/80">{f.unread}</span> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
        <div className="border-b border-white/10 px-3 py-2 text-sm text-blue-50/80">Messages</div>
        <ul className="text-sm divide-y divide-white/10">
          {messages.map((m) => (
            <li key={m.id} className={`px-3 py-2 hover:bg-white/5 ${m.id === activeMsg?.id ? 'bg-white/5' : ''}`}>
              <div className="text-blue-50">{m.subject}</div>
              <div className="text-blue-50/70 text-xs">{m.from} · {m.time}</div>
              <div className="text-blue-50/70 text-xs truncate">{m.snippet}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-6 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
        <div className="border-b border-white/10 px-3 py-2 text-sm text-blue-50/80">Preview</div>
        {activeMsg ? (
          <div className="p-4 space-y-2 text-sm">
            <div className="text-xl text-blue-50">{activeMsg.subject}</div>
            <div className="text-blue-50/80">From: {activeMsg.from}</div>
            <div className="text-blue-50/70">{activeMsg.snippet} ...</div>
          </div>
        ) : (
          <div className="p-4 text-blue-50/70 text-sm">No message selected</div>
        )}
      </div>
    </div>
  )
}
