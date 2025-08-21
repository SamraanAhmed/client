import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Mock login - replace with actual API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'demo@example.com' && password === 'password') {
          const mockUser = {
            id: '1',
            email: email,
            name: 'John Doe',
            phone: '+1-555-123-4567',
            dateOfBirth: '1990-01-01',
            address: '123 Main St, New York, NY 10001'
          }
          setUser(mockUser)
          localStorage.setItem('user', JSON.stringify(mockUser))
          resolve(mockUser)
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    })
  }

  const signup = async (userData) => {
    // Mock signup - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: Date.now().toString(),
          ...userData
        }
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
        resolve(newUser)
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateProfile = async (updatedData) => {
    // Mock update - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedUser = { ...user, ...updatedData }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
        resolve(updatedUser)
      }, 1000)
    })
  }

  const forgotPassword = async (email) => {
    // Mock forgot password - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Password reset email sent' })
      }, 1000)
    })
  }

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
    forgotPassword,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
