import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  FileText,
  Download,
  Edit,
  X,
  Bell,
  CreditCard,
  MessageSquare,
  Star,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Settings,
  Heart,
  Activity
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Loading from '../components/ui/Loading'

const Dashboard = () => {
  const { user, updateProfile } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({})
  const [loading, setLoading] = useState(false)

  // Mock data - in real app, fetch from API
  const [appointments, setAppointments] = useState([
    {
      id: 'BS12345678',
      service: 'General Checkup & Cleaning',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: '60 minutes',
      status: 'confirmed',
      location: 'Main Office',
      canReschedule: true,
      canCancel: true
    },
    {
      id: 'BS12345679',
      service: 'Teeth Whitening',
      doctor: 'Dr. Emily Rodriguez',
      date: '2024-02-15',
      time: '2:00 PM',
      duration: '90 minutes',
      status: 'confirmed',
      location: 'Main Office',
      canReschedule: true,
      canCancel: true
    }
  ])

  const [appointmentHistory, setAppointmentHistory] = useState([
    {
      id: 'BS12345676',
      service: 'General Checkup',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-12-15',
      time: '11:00 AM',
      status: 'completed',
      notes: 'Routine cleaning completed. Good oral health.',
      cost: 'PKR 42,000.00',
      invoice: 'INV-2023-1215'
    },
    {
      id: 'BS12345677',
      service: 'Root Canal Treatment',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-11-20',
      time: '3:00 PM',
      status: 'completed',
      notes: 'Root canal on tooth #14 completed successfully.',
      cost: 'PKR 224,000.00',
      invoice: 'INV-2023-1120'
    }
  ])

  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'Dr. Sarah Johnson',
      subject: 'Follow-up: Recent Cleaning',
      message: 'Hope you\'re feeling well after your recent cleaning. Please continue with the recommended oral care routine.',
      date: '2024-01-20',
      read: false
    },
    {
      id: 2,
      from: 'BrightSmile Front Desk',
      subject: 'Appointment Reminder',
      message: 'This is a friendly reminder about your upcoming appointment on January 25th at 10:00 AM.',
      date: '2024-01-22',
      read: true
    }
  ])

  const [healthForms, setHealthForms] = useState([
    {
      id: 1,
      name: 'Medical History Update',
      description: 'Please update your medical history and current medications',
      dueDate: '2024-01-30',
      status: 'pending',
      required: true
    },
    {
      id: 2,
      name: 'Insurance Information',
      description: 'Verify your current insurance details',
      dueDate: '2024-02-01',
      status: 'completed',
      required: false
    }
  ])

  useEffect(() => {
    if (user) {
      setEditData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        dateOfBirth: user.dateOfBirth || '',
        address: user.address || ''
      })
    }
  }, [user])

  const handleProfileUpdate = async () => {
    setLoading(true)
    try {
      await updateProfile(editData)
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20'
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
      case 'completed':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
      case 'cancelled':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20'
      default:
        return 'text-neutral-600 bg-neutral-50 dark:bg-neutral-800'
    }
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Activity },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'history', name: 'History', icon: FileText },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'forms', name: 'Forms', icon: FileText },
    { id: 'profile', name: 'Profile', icon: User }
  ]

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading size="lg" text="Loading dashboard..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white">
                Welcome back, {user?.name?.split(' ')[0] || 'Patient'}!
              </h1>
              <p className="text-neutral-600 dark:text-neutral-300 mt-1">
                Manage your appointments and health information
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button
                as={Link}
                to="/book"
                variant="primary"
                icon={<Calendar size={16} />}
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                icon={<Phone size={16} />}
                href="tel:+1-555-123-4567"
              >
                Call Clinic
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-neutral-200 dark:border-neutral-700">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                        : 'border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.name}</span>
                    {tab.id === 'messages' && messages.filter(m => !m.read).length > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {messages.filter(m => !m.read).length}
                      </span>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Upcoming Appointments */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      Upcoming Appointments
                    </h2>
                    <Button
                      as={Link}
                      to="/book"
                      variant="outline"
                      size="sm"
                      icon={<Calendar size={16} />}
                    >
                      Book New
                    </Button>
                  </div>
                  
                  {appointments.length > 0 ? (
                    <div className="space-y-4">
                      {appointments.slice(0, 2).map((appointment) => (
                        <div
                          key={appointment.id}
                          className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-medium text-neutral-900 dark:text-white">
                                {appointment.service}
                              </h3>
                              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                                with {appointment.doctor}
                              </p>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                                <span className="flex items-center">
                                  <Calendar size={14} className="mr-1" />
                                  {new Date(appointment.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center">
                                  <Clock size={14} className="mr-1" />
                                  {appointment.time}
                                </span>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      ))}
                      {appointments.length > 2 && (
                        <button
                          onClick={() => setActiveTab('appointments')}
                          className="w-full text-center text-primary-600 hover:text-primary-500 text-sm font-medium py-2"
                        >
                          View all appointments
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                      <p className="text-neutral-600 dark:text-neutral-300">No upcoming appointments</p>
                      <Button
                        as={Link}
                        to="/book"
                        variant="primary"
                        size="sm"
                        className="mt-3"
                      >
                        Schedule Your First Visit
                      </Button>
                    </div>
                  )}
                </Card>

                {/* Recent Messages */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      Recent Messages
                    </h2>
                    <button
                      onClick={() => setActiveTab('messages')}
                      className="text-primary-600 hover:text-primary-500 text-sm font-medium"
                    >
                      View All
                    </button>
                  </div>
                  
                  {messages.slice(0, 3).map((message) => (
                    <div
                      key={message.id}
                      className={`border-l-4 pl-4 py-3 ${
                        message.read ? 'border-neutral-200' : 'border-primary-500'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`font-medium ${
                            message.read 
                              ? 'text-neutral-700 dark:text-neutral-300' 
                              : 'text-neutral-900 dark:text-white'
                          }`}>
                            {message.subject}
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                            From: {message.from}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 line-clamp-2">
                            {message.message}
                          </p>
                        </div>
                        <span className="text-xs text-neutral-500 ml-4">
                          {new Date(message.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card className="p-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                    Your Health Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">Total Visits</span>
                      <span className="font-medium text-neutral-900 dark:text-white">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">Last Cleaning</span>
                      <span className="font-medium text-neutral-900 dark:text-white">Dec 15, 2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">Next Due</span>
                      <span className="font-medium text-green-600">Jun 15, 2024</span>
                    </div>
                  </div>
                </Card>

                {/* Pending Forms */}
                <Card className="p-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                    Pending Forms
                  </h3>
                  {healthForms.filter(form => form.status === 'pending').length > 0 ? (
                    <div className="space-y-3">
                      {healthForms.filter(form => form.status === 'pending').map((form) => (
                        <div key={form.id} className="border border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                          <h4 className="font-medium text-yellow-900 dark:text-yellow-100 text-sm">
                            {form.name}
                          </h4>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                            Due: {new Date(form.dueDate).toLocaleDateString()}
                          </p>
                          <Button
                            onClick={() => setActiveTab('forms')}
                            variant="outline"
                            size="sm"
                            className="mt-2 text-xs"
                          >
                            Complete Now
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      All forms completed ✓
                    </p>
                  )}
                </Card>

                {/* Emergency Contact */}
                <Card className="p-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">
                    Emergency Care
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                    For dental emergencies outside office hours
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    icon={<Phone size={16} />}
                    href="tel:+1-555-123-4567"
                    className="border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300"
                  >
                    Call Emergency Line
                  </Button>
                </Card>
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Your Appointments
                </h2>
                <Button
                  as={Link}
                  to="/book"
                  variant="primary"
                  icon={<Calendar size={16} />}
                >
                  Book New Appointment
                </Button>
              </div>

              {appointments.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {appointment.service}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-400">Doctor</p>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            {appointment.doctor}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-400">Date</p>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            {new Date(appointment.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-400">Time</p>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            {appointment.time}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-400">Duration</p>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            {appointment.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      {appointment.canReschedule && (
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      )}
                      {appointment.canCancel && (
                        <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                          Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Appointment History
              </h2>

              {appointmentHistory.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {appointment.service}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-400">Doctor</p>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            {appointment.doctor}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-400">Date</p>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            {new Date(appointment.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-400">Cost</p>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            {appointment.cost}
                          </p>
                        </div>
                      </div>

                      {appointment.notes && (
                        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 mb-4">
                          <p className="text-sm text-neutral-700 dark:text-neutral-300">
                            <strong>Notes:</strong> {appointment.notes}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Download size={16} />}
                      >
                        Invoice
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Messages
              </h2>

              {messages.map((message) => (
                <Card key={message.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`text-lg font-semibold ${
                          message.read 
                            ? 'text-neutral-700 dark:text-neutral-300' 
                            : 'text-neutral-900 dark:text-white'
                        }`}>
                          {message.subject}
                        </h3>
                        {!message.read && (
                          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        From: {message.from} • {new Date(message.date).toLocaleDateString()}
                      </p>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        {message.message}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Reply
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Forms Tab */}
          {activeTab === 'forms' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Health Forms
              </h2>

              {healthForms.map((form) => (
                <Card key={form.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {form.name}
                        </h3>
                        {form.required && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                            Required
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          form.status === 'completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                        }`}>
                          {form.status}
                        </span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-3">
                        {form.description}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Due: {new Date(form.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="ml-4">
                      {form.status === 'pending' ? (
                        <Button variant="primary" size="sm">
                          Complete Form
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" icon={<Download size={16} />}>
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="max-w-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Profile Information
                </h2>
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  variant={isEditing ? "outline" : "primary"}
                  icon={isEditing ? <X size={16} /> : <Edit size={16} />}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </Button>
              </div>

              <Card className="p-6">
                {isEditing ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        value={editData.name}
                        onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                        icon={<User size={20} />}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                        icon={<Mail size={20} />}
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                        icon={<Phone size={20} />}
                      />
                      <Input
                        label="Date of Birth"
                        type="date"
                        value={editData.dateOfBirth}
                        onChange={(e) => setEditData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      />
                    </div>
                    <Input
                      label="Address"
                      value={editData.address}
                      onChange={(e) => setEditData(prev => ({ ...prev, address: e.target.value }))}
                      icon={<MapPin size={20} />}
                    />
                    <div className="flex space-x-3">
                      <Button
                        onClick={handleProfileUpdate}
                        loading={loading}
                        icon={<CheckCircle size={16} />}
                      >
                        Save Changes
                      </Button>
                      <Button
                        onClick={() => setIsEditing(false)}
                        variant="outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                          Full Name
                        </label>
                        <p className="text-neutral-900 dark:text-white">
                          {user.name || 'Not provided'}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                          Email Address
                        </label>
                        <p className="text-neutral-900 dark:text-white">
                          {user.email || 'Not provided'}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                          Phone Number
                        </label>
                        <p className="text-neutral-900 dark:text-white">
                          {user.phone || 'Not provided'}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                          Date of Birth
                        </label>
                        <p className="text-neutral-900 dark:text-white">
                          {user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'Not provided'}
                        </p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        Address
                      </label>
                      <p className="text-neutral-900 dark:text-white">
                        {user.address || 'Not provided'}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
