import React, {useState} from 'react';
import Display from './components/Display/Display';
import Form from './components/Form/Form'
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  const [monsters, setMonsters] = useState([]);

  const orderedMonsters = [].concat(monsters).sort((a, b) => a.initiative < b.initiative ? 1 : -1); 
  //orders monsters state by initiative big to small 

  return (
    <div className="App">
      <h1>Season of the Sword</h1>
      <p>-encounter tracker-</p>
      <Display orderedMonsters={orderedMonsters} />
      
      <Route path='/add'>
        <Form setMonsters={setMonsters} monsters={monsters} />
      </Route>
    </div>
  );
}

export default App;
