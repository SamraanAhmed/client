import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()
  
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
          Welcome back, {user?.name || 'Patient'}!
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Your patient dashboard is coming soon.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
