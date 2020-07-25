import React, { useState, useCallback, useRef } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Grid from './components/Grid';
import produce from 'immer';
import './index.css';

function App() {
  const [ preset, setPreset ] = useState(null);
  const [ speed, setSpeed ] = useState(100);
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
  const colCount = 40;

  const operations = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1 ,0],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [1, 1]
  ]

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

  const handleClear = () => {
    setRunning(false);
    runningRef.current = false;
    setGrid(() => createEmptyGrid());
  }

  const handleCellClick = (i, j) => {
      setGrid(grid => {
        return produce(grid, newGrid => {
          newGrid[i][j] = grid[i][j] ? 0 : 1;
        })
      })
  }

  const runSimulation = useCallback(() => {
      if(!runningRef.current){
          return
      }

      setGrid(grid => {
        return produce(grid, newGrid => {
          for (let i=0; i<rowCount; i++){
            for (let j=0; j<colCount; j++){
              // Calculate the amount of neighbors each cell has
              let neighborCount = 0;
              operations.forEach(([x, y]) => {
                const tempI = i + x
                const tempJ = j + y
                if (tempI >= 0 && tempI < rowCount && tempJ >= 0 && tempJ < colCount){
                  neighborCount += grid[tempI][tempJ]
                }
              });
    
              // Use the amount of neighbors the current cell has to check which rule to apply
              if (neighborCount < 2 || neighborCount > 3){
                newGrid[i][j] = 0;
              } else if (grid[i][j] === 0 && neighborCount === 3){
                newGrid[i][j] = 1;
              }          
            }
          }
        })
      })
      
      setTimeout(runSimulation, speed)
  }, [ speed, operations ])

  return (
    <div>
      <Route exact path='/'>
        <Nav 
          handleClear={handleClear}
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
