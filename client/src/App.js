import React, { useState, useCallback, useRef } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Stats from './components/Stats';
import Grid from './components/Grid';
import Footer from './components/Footer';
import About from './components/About';
import produce from 'immer';
import './index.css';

import { createEmptyGrid, createRandomGrid, createToadGrid, createPulsarGrid } from './utils/generateGrid';

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

function App() {
  const rowCount = 40;
  const colCount = 60;

  const [ speed, setSpeed ] = useState(100);
  const [ running, setRunning ] = useState(false);
  const [ generationCount, setGenerationCount ] = useState(0);
  const [ grid, setGrid ] = useState(() => createEmptyGrid(rowCount, colCount));

  // Create a ref for running to use in callback
  const runningRef = useRef(running);
  runningRef.current = running;

  // Create a ref for speed to use in callback
  const speedRef = useRef(speed);
  speedRef.current = speed;

  /**
   * handleSpeed - handles the user selection for speed
   * Wrapped in a useCallback to prevent unnecessary re-renders in the navbar
   */
  const handleSpeed = useCallback(selectedSpeed => {
    setSpeed(selectedSpeed)
  }, [setSpeed])
    
  /**
   * handleClear - Stops the game from running and resets the grid.
   * Wrapped in a useCallback to prevent unnecessary re-renders in the navbar
   */
  const handleClear = useCallback(() => {
    setRunning(false);
    runningRef.current = false;
    setGrid(() => createEmptyGrid(rowCount, colCount));
    setGenerationCount(0);
  }, [setRunning, setGrid, setGenerationCount])

  /**
   * toggleRunning - Stops and start the simulation
   * Wrapped in a useCallback to prevent unnecessary re-renders in the navbar
   */
  const toggleRunning = useCallback(() => {
    setRunning(running => !running);
    runningRef.current = true;
    runSimulation();
  }, [setRunning])

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
  }

  /**
   * generatePreset - Populates the grid with a selected preset
   * Wrapped in a useCallback to prevent unnecessary re-renders in the navbar
   */
  const generatePreset = useCallback(selectedPreset => {
    switch(selectedPreset){
      case 'RANDOM':
        setGrid(() => createRandomGrid(rowCount, colCount));
        break;
      case 'TOAD':
        setGrid(() => createToadGrid(rowCount, colCount));
        break;
      case 'PULSAR':
        setGrid(() => createPulsarGrid(rowCount, colCount));
        break;
      default:
        setGrid(() => createEmptyGrid(rowCount, colCount));
    }
    setGenerationCount(0);
  }, [setGrid, setGenerationCount])

  /**
   * runSimulation
   * This function is the main driver for the behavior of the cells in the grid.
   * Time Complexity: O(n * m)
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
            for (let j=0; j<colCount; j++){ // O(m) - m times to loop through columns
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
              } 
              // If a dead cell has exactly 3 neighbors, it becomes a live cell
              else if (grid[i][j] === 0 && neighborCount === 3){
                newGrid[i][j] = 1;
              }          
            }
          }
        })
      })
      
      setGenerationCount(count => count + 1);
      setTimeout(runSimulation, speedRef.current)
  }, [])

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
        <Stats
          generationCount={generationCount}
        />
        <Grid 
          running={running} 
          speed={speed}
          grid={grid}
          colCount={colCount}
          handleCellClick={handleCellClick}
        />
        <Footer/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
    </div>
  );
}

export default App;
