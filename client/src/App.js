import React, { useState, useCallback, useRef } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Grid from './components/Grid';
import produce from 'immer';
import './index.css';

const createEmptyGrid = (rowCount, colCount) => {
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

function App() {
  const rowCount = 30;
  const colCount = 50;

  const [ speed, setSpeed ] = useState(100);
  const [ running, setRunning ] = useState(false);
  const [ liveCount, setLiveCount ] = useState(0);
  const [ grid, setGrid ] = useState(() => createEmptyGrid(rowCount, colCount));

  // Create a ref for running to use in callback
  const runningRef = useRef(running);
  runningRef.current = running;

  // Handles the user interaction for changing speed
  const handleSpeed = selectedSpeed => {
    setSpeed(selectedSpeed)
  }
    
  /**
   * handleClear - Stops the game from running and resets the grid.
   */
  const handleClear = () => {
    setRunning(false);
    runningRef.current = false;
    setGrid(() => createEmptyGrid(rowCount, colCount));
    setLiveCount(0);
  }

  // Allows the user to toggle running on and off
  const toggleRunning = () => {
    setRunning(!running);
    runningRef.current = true;
    runSimulation();
  }


  // ============== Game Logic ==============
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

  /**
   * handleCellClick
   * @param {*} i - row index
   * @param {*} j - column index
   * Toggles the cell's life state
   * - 1 for alive
   * - 0 for dead
   * Increase the live cell count by 1
   */
  const handleCellClick = (i, j) => {
      setGrid(grid => {
        return produce(grid, newGrid => {
          newGrid[i][j] = grid[i][j] ? 0 : 1;
        })
      })
      setLiveCount(liveCount + 1);
  }

  const generatePreset = selectedPreset => {
    switch(selectedPreset){
      case 'RANDOM':
        setGrid(() => {
          const rows = []
          for(let i=0; i<rowCount; i++){
              const cols = []
              for(let j=0; j<colCount; j++){
                  cols.push(Math.random() > 0.2 ? 0 : 1);
              }
              rows.push(cols);
          }
          return rows
        })
        break;
      default:
        setGrid(() => createEmptyGrid(rowCount, colCount));
    }
  }

  /**
   * runSimulation
   * This function is the main driver for the behavior of the cells in the grid.
   * Time Complexity: O(n^2)
   * 1. Create a new grid
   * 2. Loop through each column in each row.
   * 3. For each cell, count how many live neighbors there are
   * 4. Check which cells live or die based on the rules of the game
   * 5. Set the state of the grid to the new grid
   */
  const runSimulation = useCallback(() => {
      if(!runningRef.current){
          return
      }

      setGrid(grid => {
        return produce(grid, newGrid => {
          for (let i=0; i<rowCount; i++){ // O(n) - n times to loop through rows
            for (let j=0; j<colCount; j++){ // O(n) - n times to loop through columns
              // Calculate the amount of neighbors each cell has
              let neighborCount = 0;
              operations.forEach(([x, y]) => { // O(1) since operations do not rely on input
                const tempI = i + x
                const tempJ = j + y
                if (tempI >= 0 && tempI < rowCount && tempJ >= 0 && tempJ < colCount){
                  neighborCount += grid[tempI][tempJ]
                }
              });
              // Use the amount of neighbors the current cell has to check which rule to apply
              // If the neighbor count is not two or 3, the cell dies
              if (neighborCount < 2 || neighborCount > 3){
                newGrid[i][j] = 0;
                setLiveCount(liveCount - 1);
              } 
              // If a dead cell has exactly 3 neighbors, it becomes a live cell
              else if (grid[i][j] === 0 && neighborCount === 3){
                newGrid[i][j] = 1;
                setLiveCount(liveCount + 1);
              }          
            }
          }
        })
      })
      console.log(liveCount);
      setTimeout(runSimulation, speed)
  }, [ speed, operations ])

  return (
    <div>
      <Route exact path='/'>
        <Nav 
          handleClear={handleClear}
          handleSpeed={handleSpeed} 
          speed={speed} 
          running={running} 
          toggleRunning={toggleRunning}
          generatePreset={generatePreset}
        />
        <Grid 
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
