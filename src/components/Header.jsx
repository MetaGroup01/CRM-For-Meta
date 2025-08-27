import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="container h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">CRM Frontend</Link>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 ${isActive ? 'text-blue-600 font-medium' : 'text-gray-600'}`
            }
            end
          >
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
