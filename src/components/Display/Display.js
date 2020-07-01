import React from 'react';
import './Display.css';
import {useHistory} from 'react-router-dom';
import Monster from '../Monster/Monster'

const Display = props => {
  const history = useHistory();

  const handleClick = e => {
    history.push('add');
  }

  //Take props.monsters and reorder it by initiative big to small
  //map over the now correctly ordered state and display a monster component for each monster

  return (
    <div>
      <div className='monsters-container'>
        {props.monsters ? props.monsters.map(monster => (<Monster monster={monster} />)) : null}
      </div>
      <p onClick={handleClick}>Click me</p>
    </div>
  )
}

export default Display;