import React, {useState} from 'react';
import './Form.css';

const Form = props => {
  const [init, setInit] = useState({name: '', initiative: ''});

  const handleChange = e => {
    setInit({...init, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.setMonsters([...props.monsters, init]);
    props.setActive('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name/Monster
        <input id='name' type='text' name='name' onChange={handleChange} />
      </label>
      <label htmlFor='init'>
        Initiative
        <input id='init' type='number' name='initiative' onChange={handleChange} />
      </label>
      <button type='submit'>add initiative</button>
    </form>
  )
}

export default Form;