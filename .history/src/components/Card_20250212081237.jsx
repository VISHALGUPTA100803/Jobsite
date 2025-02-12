import React from 'react'
// Wrapper component
// In React, the children prop is a special prop that allows you to pass elements or components between the opening and closing tags of a component.
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