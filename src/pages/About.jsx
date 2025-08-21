import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
            About BrightSmile Dental Clinic
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            Providing compassionate dental care since 2010. Your smile is our priority.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
