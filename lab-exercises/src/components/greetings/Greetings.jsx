import React from 'react'

const Greetings = ({ name, children }) => {
  
  return (
    <div className='Greeting componentBox'>
      <h2>Hello, { name || "World" }{ children && `, ${children}` }</h2> 
    </div>
  )
}

export default Greetings
