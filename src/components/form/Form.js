import React, {useState, useEffect} from 'react';
import './form.css';

const Form = () => {
  const [add, setAdd] = useState([{init: '', monster: ''}]);

  useEffect(() => {
    
  }, [add])

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div>
      Form
      <button onClick={handleSubmit}>Click me</button>
    </div>
  )
}

export default Form;