import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Grid from './components/Grid';
import './index.css';

function App() {
  const [ preset, setPreset ] = useState(null);
  const [ speed, setSpeed ] = useState(1);

  const handleSpeed = selectedSpeed => {
    setSpeed(selectedSpeed)
  }

  const handlePreset = selectedPreset => {
    setPreset(selectedPreset);
  }

  return (
    <div>
      <Route exact path='/'>
        <Nav handleSpeed={handleSpeed} handlePreset={handlePreset} speed={speed}/>
        <Grid preset={preset}/>
      </Route>
      <Route path='/about'>

      </Route>
    </div>
  );
}

export default App;
