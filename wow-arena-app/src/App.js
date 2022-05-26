import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ChooseClass from './components/ChooseClass';
import Info from './components/Info';

const initState = {
  classPage: true,
  compositionPage: false,
  chosenClass: '',
  classes: [
    'Warrior',
    'Paladin',
    'Hunter',
    'Rouge',
    'Priest',
    'Shaman',
    'Mage',
    'Warlock',
    'Monk',
    'Druid',
    'Demon Hunter',
    'Death Knight'
  ],
  values: {
    comp: "",
    easy: "",
    hard: ""
  },
  userSaves: []
}

function App() {
  const [state, setState] = useState(initState)

  return (
    <div className="App">
      <NavBar/>
      {state.classPage && <ChooseClass state={state} setState={setState}/>}
      {state.chosenClass && <Info state={state} setState={setState}/>}
    </div>
  );
}

export default App;
