import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  List,
  Download,
  RefreshCw,
  SlidersHorizontal,
  X,
  Check,
  CircleDot,
  Clock,
  User,
  Phone,
  Mail,
  Calendar,
  Building,
  DollarSign,
  ChevronsUpDown,
  ArrowUpDown,
  GripVertical
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { cn } from '../utils/cn';
import leads from '../data/leads.json';

const statusStages = [
  { id: 'initial', name: 'INITIAL CONTACT', color: 'bg-blue-500', progress: 20, count: 4 },
  { id: 'discussion', name: 'DISCUSSIONS', color: 'bg-purple-500', progress: 40, count: 3 },
  { id: 'decision', name: 'DECISION MAKING', color: 'bg-yellow-500', progress: 60, count: 2 },
  { id: 'contract', name: 'CONTRACT DISCUSSION', color: 'bg-green-500', progress: 80, count: 1 }
];

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  qualified: 'bg-green-100 text-green-800',
  proposal: 'bg-yellow-100 text-yellow-800',
  negotiation: 'bg-purple-100 text-purple-800',
  won: 'bg-emerald-100 text-emerald-800',
  lost: 'bg-red-100 text-red-800'
};

const LeadCard = ({ lead }) => {
  return (
    <Card className="mb-3 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-500" />
            </div>
            <div>
              <h4 className="font-medium text-sm">{lead.name}</h4>
              <p className="text-xs text-gray-500">{lead.company}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Phone className="w-3.5 h-3.5 mr-2 text-gray-400" />
            <span>{lead.phone || 'No phone'}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="w-3.5 h-3.5 mr-2 text-gray-400" />
            <span className="truncate">{lead.email || 'No email'}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-3.5 h-3.5 mr-2 text-gray-400" />
            <span>Added {new Date(lead.date).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
          <Badge className={cn(
            'text-xs font-medium',
            statusColors[lead.status] || 'bg-gray-100 text-gray-800'
          )}>
            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
          </Badge>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Phone className="h-3.5 w-3.5 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Mail className="h-3.5 w-3.5 text-gray-500" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState('kanban');
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (lead.company?.toLowerCase().includes(searchTerm?.toLowerCase() || ''))
    const matchesStatus = selectedStatus === 'all' || lead.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    const aValue = a[sortField] || ''
    const bValue = b[sortField] || ''
    const direction = sortDirection === 'asc' ? 1 : -1
    
    if (typeof aValue === 'string') {
      return aValue.toString().localeCompare(bValue.toString()) * direction
    }
    return (aValue - bValue) * direction
  })

  const handleSelectLead = (leadId) => {
    setSelectedLeads(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    )
  }

  const handleSelectAll = () => {
    setSelectedLeads(
      selectedLeads.length === sortedLeads.length 
        ? [] 
        : sortedLeads.map(lead => lead.id)
    )
  }

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold">Leads</h1>
            <div className="relative">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <span>LEADS</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <div className="flex border rounded-md overflow-hidden">
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'} 
                size="sm" 
                className="h-8 px-3 rounded-none border-r"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button 
                variant={viewMode === 'kanban' ? 'default' : 'ghost'} 
                size="sm" 
                className="h-8 px-3 rounded-none"
                onClick={() => setViewMode('kanban')}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
            </div>
            
            <Button variant="outline" size="sm" className="h-8 px-3">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Filter</span>
              <span className="ml-1 text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5">2</span>
            </Button>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                className="pl-10 pr-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-8 w-40 sm:w-48"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Button variant="outline" size="sm" className="h-8 px-3">
              <RefreshCw className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            
            <Button variant="outline" size="sm" className="h-8 px-3">
              <Download className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Export</span>
            </Button>
            
            <Button size="sm" className="h-8 px-3 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-1" />
              <span>New Lead</span>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="font-medium">10</span>
              <span className="ml-1">Leads</span>
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="flex items-center">
              <span className="font-medium">4</span>
              <span className="ml-1">Active</span>
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="flex items-center">
              <span className="font-medium">6</span>
              <span className="ml-1">Inactive</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statusStages.map((stage) => (
          <div key={stage.id} className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${stage.color}`}></div>
                <h3 className="text-sm font-medium text-gray-700">{stage.name}</h3>
                <span className="text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-0.5">
                  {stage.count}
                </span>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700">
                  <Plus className="w-3.5 h-3.5" />
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700">
                  <MoreHorizontal className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              {leads
                .filter(lead => lead.status === stage.id)
                .map(lead => (
                  <LeadCard key={lead.id} lead={lead} />
                ))}
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-sm text-blue-600 hover:bg-blue-50 flex items-center justify-center py-2"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Card
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Action Bar */}
      <div className="fixed bottom-6 right-6 flex items-center space-x-2">
        <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
          <GripVertical className="w-4 h-4" />
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full h-12 w-12 p-0">
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}