import React from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const Book = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Calendar className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            Our advanced booking system is coming soon. For now, please call us at <a href="tel:+1-555-123-4567" className="text-primary-600 hover:text-primary-500">+1 (555) 123-4567</a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Book
