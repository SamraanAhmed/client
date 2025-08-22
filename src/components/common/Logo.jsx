import React from 'react'

const Logo = ({ className = "h-8 w-auto", variant = "default" }) => {
  const colors = {
    default: {
      primary: "#1C9DD9",
      secondary: "#0F4C81",
      accent: "#20C997"
    },
    white: {
      primary: "#ffffff",
      secondary: "#f1f5f9",
      accent: "#e2e8f0"
    }
  }
  
  const currentColors = colors[variant] || colors.default

  return (
    <svg 
      className={className}
      viewBox="0 0 200 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Karachi Dental Clinic Logo"
    >
      {/* Tooth Icon */}
      <g>
        {/* Main tooth shape */}
        <path
          d="M30 10C35 10 40 12 40 18C40 25 40 35 35 40C32 42 28 42 25 40C20 35 20 25 20 18C20 12 25 10 30 10Z"
          fill={currentColors.primary}
        />
        {/* Tooth highlight */}
        <path
          d="M30 12C33 12 36 13 36 17C36 22 36 30 33 34C31 35 29 35 27 34C24 30 24 22 24 17C24 13 27 12 30 12Z"
          fill={currentColors.accent}
          opacity="0.3"
        />
        {/* Sparkle effect */}
        <circle cx="32" cy="16" r="1.5" fill="white" opacity="0.8" />
        <circle cx="28" cy="20" r="1" fill="white" opacity="0.6" />
      </g>
      
      {/* Smile curve */}
      <path
        d="M15 25C20 30 25 32 30 32C35 32 40 30 45 25"
        stroke={currentColors.secondary}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Text */}
      <text
        x="55"
        y="25"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill={currentColors.primary}
      >
        Karachi
      </text>
      <text
        x="55"
        y="42"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        fontSize="12"
        fill={currentColors.secondary}
      >
        DENTAL CLINIC
      </text>
    </svg>
  )
}

export default Logo
