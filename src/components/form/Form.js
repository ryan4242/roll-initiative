import React, {useState, useEffect} from 'react';
import './form.css';
import NewLine from '../addLine/NewLine';

const Form = () => {
  const [monsters, setMonsters] = useState([{init: '', monster: ''}]); //state to track total monsters and initiatives


  useEffect(() => {
    
  }, [monsters])

  const handleClick = e => {
    setMonsters([...monsters, {init: '', monster: ''}])
  }

  return (
    <div>
      <form>
        {monsters.map(monster => (<NewLine monster={monster}/>))}
        <p onClick={handleClick}>Click me</p>
      </form>
      
    </div>
  )
}

export default Form;