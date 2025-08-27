import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Leads from '../pages/Leads.jsx'
import Calendar from '../pages/Calendar.jsx'
import Chats from '../pages/Chats.jsx'
import Mail from '../pages/Mail.jsx'
import Settings from '../pages/Settings.jsx'
import NotFound from '../pages/NotFound.jsx'

// Create placeholder components for new pages
const Pipeline = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Pipeline</h1>
    <p className="text-gray-600">Sales pipeline management coming soon...</p>
  </div>
)

const Calls = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Calls</h1>
    <p className="text-gray-600">Call management coming soon...</p>
  </div>
)

const Analytics = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
    <p className="text-gray-600">Advanced analytics coming soon...</p>
  </div>
)

const Documents = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
    <p className="text-gray-600">Document management coming soon...</p>
  </div>
)

const Help = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
    <p className="text-gray-600">Help documentation coming soon...</p>
  </div>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'leads', element: <Leads /> },
      { path: 'pipeline', element: <Pipeline /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'chats', element: <Chats /> },
      { path: 'mail', element: <Mail /> },
      { path: 'calls', element: <Calls /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'documents', element: <Documents /> },
      { path: 'help', element: <Help /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])
