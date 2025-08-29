import { useState } from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  Phone,
  Mail,
  Calendar,
  User,
  Building,
  DollarSign,
  ChevronDown,
  SortAsc,
  SortDesc
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { cn } from '../utils/cn'
import leads from '../data/leads.json'

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  qualified: 'bg-green-100 text-green-800',
  proposal: 'bg-yellow-100 text-yellow-800',
  negotiation: 'bg-purple-100 text-purple-800',
  won: 'bg-emerald-100 text-emerald-800',
  lost: 'bg-red-100 text-red-800'
}

// Mapping lead statuses to stages
const stageMapping = {
  'Initial Contact': ['new'],
  'Discussions': ['qualified'],
  'Decision Making': ['negotiation'],
  'Contract Discussion': ['proposal', 'won', 'lost']
}

function groupLeadsByStage(leads) {
  const grouped = {
    'Initial Contact': [],
    'Discussions': [],
    'Decision Making': [],
    'Contract Discussion': []
  }
  leads.forEach(lead => {
    for (const [stage, statuses] of Object.entries(stageMapping)) {
      if (statuses.includes(lead.status)) {
        grouped[stage].push(lead)
        break
      }
    }
  })
  return grouped
}

function LeadCard({ lead }) {
  return (
    <Card className="mb-2 shadow-sm border border-gray-300">
      <CardContent className="p-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <div>{lead.owner}</div>
          <div>{lead.createdAt}</div>
        </div>
        <div className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer mb-1">{lead.name}</div>
        <div className="flex justify-between text-xs text-gray-600">
          <div>{lead.value.toLocaleString()} AED</div>
          <div>
            <Badge className={cn('uppercase', statusColors[lead.status] || statusColors.new)}>
              {lead.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function QuickAddCard() {
  return (
    <Card className="mb-2 border border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-50">
      <CardContent className="p-6 text-center text-gray-500">
        Quick add
      </CardContent>
    </Card>
  )
}

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.owner.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || lead.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const groupedLeads = groupLeadsByStage(filteredLeads)

  // Calculate total value per stage
  const stageTotals = {}
  for (const stage in groupedLeads) {
    stageTotals[stage] = groupedLeads[stage].reduce((sum, lead) => sum + lead.value, 0)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-1">Manage and track your sales leads</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search leads by name or owner..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="sm:w-48">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="qualified">Qualified</option>
                <option value="proposal">Proposal</option>
                <option value="negotiation">Negotiation</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads grouped by stage */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {Object.entries(groupedLeads).map(([stage, leads]) => (
          <div key={stage}>
            <h2 className="text-xs font-bold uppercase text-gray-600 mb-2 border-b pb-1 border-gray-300">
              {stage}
            </h2>
            <div className="text-xs text-gray-500 mb-4">
              {leads.length} leads: {stageTotals[stage].toLocaleString()} AED
            </div>
            <QuickAddCard />
            {leads.map(lead => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
