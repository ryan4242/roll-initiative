import React from 'react';
import './Display.css';
import Monster from '../Monster/Monster'

const Display = props => {

  console.log(props.orderedMonsters)

  return (
    <div>
      <div className='monsters-container'>
        {props.orderedMonsters ? (props.orderedMonsters.map(monster => (<Monster key={monster.initiative} monster={monster} />))) : null}
      </div>
    </div>
  )
}

export default Display;