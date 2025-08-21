import React from 'react'
import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'default',
  shadow = 'soft',
  ...props
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  const shadows = {
    none: '',
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    hard: 'shadow-hard'
  }

  const baseClasses = `
    bg-white dark:bg-neutral-800 
    rounded-xl border border-neutral-200 dark:border-neutral-700
    transition-all duration-300
    ${paddings[padding]}
    ${shadows[shadow]}
    ${hover ? 'hover:shadow-medium hover:-translate-y-1' : ''}
    ${className}
  `

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
