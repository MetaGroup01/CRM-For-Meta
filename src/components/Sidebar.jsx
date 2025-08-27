import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageCircle, 
  Mail, 
  Settings,
  BarChart3,
  Target,
  Phone,
  FileText,
  HelpCircle,
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { key: 'leads', label: 'Leads', to: '/leads', icon: Users },
  { key: 'pipeline', label: 'Pipeline', to: '/pipeline', icon: Target },
  { key: 'calendar', label: 'Calendar', to: '/calendar', icon: Calendar },
  { key: 'chats', label: 'Chats', to: '/chats', icon: MessageCircle },
  { key: 'mail', label: 'Mail', to: '/mail', icon: Mail },
  { key: 'calls', label: 'Calls', to: '/calls', icon: Phone },
  { key: 'analytics', label: 'Analytics', to: '/analytics', icon: BarChart3 },
  { key: 'documents', label: 'Documents', to: '/documents', icon: FileText },
];

const bottomNavItems = [
  { key: 'help', label: 'Help', to: '/help', icon: HelpCircle },
  { key: 'settings', label: 'Settings', to: '/settings', icon: Settings },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-500" />
        )}
      </button>

      <aside 
        className={cn(
          'h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0 transition-all duration-300 ease-in-out',
          isCollapsed ? 'w-16' : 'w-64'
        )}
      >
        {/* User Profile */}
        <div className="px-6 py-4 border-b border-gray-200 overflow-hidden">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">basitchunawala786</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            )}
          </div>
        </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group',
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  isCollapsed ? 'justify-center' : ''
                )
              }
              title={isCollapsed ? item.label : ''}
            >
              <Icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed ? 'mr-0' : 'mr-3')} />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-2 py-4 border-t border-gray-200 space-y-1">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  isCollapsed ? 'justify-center' : ''
                )
              }
              title={isCollapsed ? item.label : ''}
            >
              <Icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed ? 'mr-0' : 'mr-3')} />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </div>
      </aside>
    </div>
  );
}
