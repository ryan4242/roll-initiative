import React, {useState} from 'react';
import Display from './components/Display/Display';
import Form from './components/Form/Form'
import './App.css';

function App() {
  const [active, setActive] = useState('')

  const [monsters, setMonsters] = useState([]);

  const orderedMonsters = monsters.sort((a, b) => b.initiative - a.initiative); 
  //orders monsters state by initiative big to small 

  const handleClick = e => {
    console.log(orderedMonsters);
    setActive('active');
  }

  return (
    <div className="App">
      <h1>Season of the Sword</h1>
      <p>-encounter tracker-</p>
      <Display orderedMonsters={orderedMonsters} />

      {active === 'active' ? (<Form setMonsters={setMonsters} monsters={monsters} setActive={setActive} />) : (<p onClick={handleClick}>Click me</p>)}
    </div>
  );
}

export default App;
