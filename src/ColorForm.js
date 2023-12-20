import React from 'react'

const ColorForm = ({color, setColor}) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input 
      type="text"
      placeholder="Type a Color" 
      className="search"
      value={color}
      onChange={e => setColor(e.target.value)}
      />
    </form>
  )
}

export default ColorForm