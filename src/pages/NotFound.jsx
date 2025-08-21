import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto px-4"
      >
        <div className="text-8xl font-bold text-primary-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Button
            as={Link}
            to="/"
            variant="primary"
            icon={<Home size={16} />}
            fullWidth
          >
            Go Home
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="secondary"
            icon={<Search size={16} />}
            fullWidth
          >
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
