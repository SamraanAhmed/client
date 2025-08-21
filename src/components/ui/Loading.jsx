import React from 'react'
import { motion } from 'framer-motion'

const Loading = ({ size = 'md', text = '', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <motion.div
        className={`border-4 border-neutral-200 border-t-primary-500 rounded-full ${sizes[size]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-neutral-600 dark:text-neutral-400 text-sm"
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

export default Loading
