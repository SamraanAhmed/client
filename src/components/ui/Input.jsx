import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Input = forwardRef(({
  label,
  error,
  hint,
  icon,
  iconPosition = 'left',
  type = 'text',
  className = '',
  required = false,
  ...props
}, ref) => {
  const inputClasses = `
    w-full px-4 py-3 border rounded-lg
    bg-white dark:bg-neutral-800
    border-neutral-300 dark:border-neutral-600
    text-neutral-900 dark:text-neutral-100
    placeholder-neutral-500 dark:placeholder-neutral-400
    focus:ring-2 focus:ring-primary-500 focus:border-primary-500
    transition-all duration-200
    ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
    ${icon && iconPosition === 'left' ? 'pl-12' : ''}
    ${icon && iconPosition === 'right' ? 'pr-12' : ''}
    ${className}
  `

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-neutral-500 dark:text-neutral-400">
              {icon}
            </span>
          </div>
        )}
        
        <motion.input
          ref={ref}
          type={type}
          className={inputClasses}
          whileFocus={{ scale: 1.01 }}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-neutral-500 dark:text-neutral-400">
              {icon}
            </span>
          </div>
        )}
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
      
      {hint && !error && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {hint}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
