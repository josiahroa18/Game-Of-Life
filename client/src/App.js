import React, { useState, useCallback, useRef } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Grid from './components/Grid';
import './index.css';

function App() {
  const [ preset, setPreset ] = useState(null);
  const [ speed, setSpeed ] = useState(1);
  const [ running, setRunning ] = useState(false);

  // Create a ref for running to use in callback
  const runningRef = useRef(running);
  runningRef.current = running;

  // Handles the user interaction for changing speed
  const handleSpeed = selectedSpeed => {
    setSpeed(selectedSpeed)
  }

  // Handles the user interaction for changing the preset
  const handlePreset = selectedPreset => {
    setPreset(selectedPreset);
  }

  // Allows the user to toggle running on and off
  const toggleRunning = () => {
    setRunning(!running);
    runningRef.current = true;
    runSimulation();
  }

  // ======= Game Logic =======
  const rowCount = 40;
  const colCount = 50;

  const createEmptyGrid = () => {
      const rows = []
      for(let i=0; i<rowCount; i++){
          const cols = []
          for(let j=0; j<colCount; j++){
              cols.push(0);
          }
          rows.push(cols);
      }
      return rows
  }

  const [ grid, setGrid ] = useState(() => createEmptyGrid())

  const handleCellClick = (i, j) => {
      const gridCopy = [...grid]
      gridCopy[i][j] = grid[i][j] ? 0 : 1;
      setGrid(gridCopy);
  }

  const runSimulation = useCallback(() => {
      if(!runningRef.current){
          return
      }

      const gridCopy = [...grid]
      for (let i=0; i<rowCount; i++){
        for (let j=0; j<colCount; j++){
          let neighborCount = 0;
          
        }
      }

      setTimeout(runSimulation, () => {
        switch(speed){
          case 1:
            return 300
          case 2:
            return 600
          case 3:
            return 1000
          default:
            return 300
        }
      })
  }, [ speed ])

  return (
    <div>
      <Route exact path='/'>
        <Nav 
          handleSpeed={handleSpeed} 
          handlePreset={handlePreset} 
          speed={speed} 
          running={running} 
          toggleRunning={toggleRunning}
        />
        <Grid 
          preset={preset} 
          running={running} 
          speed={speed}
          grid={grid}
          colCount={colCount}
          handleCellClick={handleCellClick}
        />
      </Route>
      <Route path='/about'>

      </Route>
    </div>
  );
}

export default App;
