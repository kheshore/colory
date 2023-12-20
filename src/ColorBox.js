import React from 'react'



const ColorBox = ({ color , pcolor}) => {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <p style={{ color: pcolor }}>{color}</p>
    </div>
  )
}

export default ColorBox