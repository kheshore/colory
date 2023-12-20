import './App.css';
import ColorBox from './ColorBox';
import ColorForm from './ColorForm';
import ToggleTextColor from './ToggleTextColor';
import React, { useState } from 'react';

function App() {

  const [color,setColor] = useState('');
  const [pcolor,setPcolor] = useState('');

  return (
    <div className='app'>
      <ColorBox
        color = {color}
        pcolor = {pcolor}
      /> 
      <ColorForm
        color = {color}
        setColor = {setColor}
      />
      <ToggleTextColor
       pcolor = {pcolor}
       setPcolor = {setPcolor} 
      />
    </div>
  )
}

export default App;
