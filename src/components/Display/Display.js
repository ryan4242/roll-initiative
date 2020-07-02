import React from 'react';
import './Display.css';
import {useHistory} from 'react-router-dom';
import Monster from '../Monster/Monster'

const Display = props => {
  const history = useHistory();

  const handleClick = e => {
    console.log(props.orderedMonsters);
    history.push('add');
  }

  return (
    <div>
      <div className='monsters-container'>
        {props.orderedMonsters ? (props.orderedMonsters.map(monster => (<Monster key={monster.initiative} monster={monster} />))) : null}
      </div>
      <p onClick={handleClick}>Click me</p>
    </div>
  )
}

export default Display;