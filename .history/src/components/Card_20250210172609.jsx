import React from 'react'
// Wrapper component
const Card = ({children,bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
     {children}
    </div>
  )
}

export default Card

// ${} → Template Literals (Backticks ``)
// Used inside template literals (backtick strings: `` `).
// Allows string interpolation (mixing variables with text).