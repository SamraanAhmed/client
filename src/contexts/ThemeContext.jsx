import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false) // Always light theme

  useEffect(() => {
    const root = window.document.documentElement
    // Always remove dark class to force light theme
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }, [])

  const toggleTheme = () => {
    // Do nothing - theme toggle disabled
  }

  const value = {
    isDark: false, // Always light
    toggleTheme,
    theme: 'light' // Always light
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
