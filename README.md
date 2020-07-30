# Game-Of-Life
An application that allows you to play Conway's game of life on the web!


## What is Conway’s Game of Life?
The game of life is a cellular automaton that follows a set of rules created by John Conway. Each cell has a state of dead or alive. Each generation of the game, along with the rules, dictates which cells live or die. Each cell has 8 neighbors that surround it.

The game takes an initial pattern and takes off from there. No additional input is required after the game starts.

The rules for life or death or quite simple:
1. Any cell with less than two or more than three live neighbors survives.
2. Any dead cell with three live neighbors becomes alive.

A cell with less than two neighbors represents underpopulation while a cell with more than three neighbors represents overpopulation.
A dead cell with three living neighbors represents reproduction for new life.

Read in more detail about the game and its origins [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

View my implementation of the project [here](https://master.d3qwxtqj51z44s.amplifyapp.com/).

## My Approach
I decided to use React.js to visualize my algorithm since this was the framework I was most comfortable with.

The start of my solution involves creating an empty grid using a 2d array with n number of rows and m number of columns. I represent the state of each cell using true for alive and false for dead. The grid is initialized with every cell dead to allow the user to create their own initial state for the game.

To implement the generations that the game goes through, I used a concept called double buffering. This is where the current grid is displayed to the user and calculations for the next generation happen on a new grid behind the scenes. Once the calculations are complete, the new grid is displayed and this process repeats.

The calculate the next state of the game, the number of living neighbors around each cell must be calculated. This is then used to decided if the cell lives, dies, or remains in its current state. All updates are inserted into the new grid.

This process checks each column in each row which implies that the time complexity for this solution is O(n*m).


