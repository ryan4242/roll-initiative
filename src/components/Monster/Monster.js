import React from 'react';

const Monster = props => {
  
  const handleChange = e => {
    props.monster = {...props.monster, [e.target.name]: e.target.value}
  }

  const handleDelete = () => {
    
  }

  console.log(props.monster);

  return (
    <div>
      <input type='number' name='initiative' value={props.monster.initiative} onChange={handleChange} />
      <input type='text'  name='name' value={props.monster.name} onChange={handleChange} />
      <p onClick={handleDelete}>X</p>
    </div>
    
  )
}

export default Monster;