import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  href,
  as: Component = 'button',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white border-transparent',
    secondary: 'bg-white hover:bg-neutral-50 text-primary-600 border border-primary-200',
    outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border border-primary-300',
    ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-700 border-transparent',
    danger: 'bg-red-500 hover:bg-red-600 text-white border-transparent',
    success: 'bg-accent-teal hover:bg-green-600 text-white border-transparent'
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 transform
    hover:scale-102 active:scale-98
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${fullWidth ? 'w-full' : ''}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `

  const buttonContent = (
    <>
      {loading && (
        <div className="loading-spinner mr-2" />
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    )
  }

  if (Component !== 'button') {
    return (
      <Component
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {buttonContent}
      </Component>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button
