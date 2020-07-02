import React from 'react';

const Monster = props => {
  
  const handleChange = e => {

  }

  const handleDelete = () => {
    
  }

  return (
    <div>
      <input type='number' value={props.monster.initiative} onChange={handleChange} />
      <input type='text' value={props.monster.name} onChange={handleChange} />
      <p onClick={handleDelete}>X</p>
    </div>
    
  )
}

export default Monster;