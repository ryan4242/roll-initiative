import React, {useState} from 'react';
import Display from './components/Display/Display';
import Form from './components/Form/Form'
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  const [monsters, setMonsters] = useState([]);

  const orderedMonsters = [].concat(monsters).sort((a, b) => a.initiative < b.initiative ? 1 : -1);

  return (
    <div className="App">
      <h1>Season of the Sword</h1>
      <p>-encounter tracker-</p>
      <Display monsters={orderedMonsters} />
      
      <Route path='/add'>
        <Form setMonsters={setMonsters} monsters={monsters} />
      </Route>
    </div>
  );
}

export default App;

//if add is clicked, form pops up with initiative and name attributes via router rendering.
//form is submitted, state is updated with forms values, rendering returns us to initial view without form

//components: 
// 1 Display of each monster and initiative 
// 2 Monster, Display maps over monsters state and renders Monster component form each monster
// 3 Form rendered via routing allows us to add to monsters state