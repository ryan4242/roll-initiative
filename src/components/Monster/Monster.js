import React from 'react';

const Monster = props => {
  return (
    <div>
      <input type='number' value={props.monster.initiative} />
      <input type='text' value={props.monster.name} />
    </div>
    
  )
}

export default Monster;