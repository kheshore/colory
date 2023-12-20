import React from 'react'

const ToggleTextColor = ({pcolor, setPcolor}) => {
  return (
    <button
    onClick={() => setPcolor(pcolor === 'black' ? 'white' : 'black')}>
      Toggle Color</button>
  )
}

export default ToggleTextColor