import React from 'react'

const Card = (content) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
     {content.title}
    </div>
  )
}

export default Card