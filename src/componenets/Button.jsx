import React from 'react'

function Button({
    childeren,
    type = 'button',
    bgColor = 'bg-color-500',
    textColor = "text-white",
    className = '',
    ...props
}) {
  return (
    <div className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props} >
        {childeren}
    </div>
  )
}

export default Button