import React from 'react';
import { About, AboutNav, StyledLink, ArticleContainer } from './styles';
import BlogHeader from '../assets/BlogHeader.png';
import GridCreation from '../assets/GridCreation.png';
import GenerationAlgo from '../assets/GenerationAlgo.png';

export default () => {
    return (
        <About>
            <AboutNav>
                <StyledLink to='/'>View Project</StyledLink>
            </AboutNav>
            <ArticleContainer>
                <header>
                    <img src={BlogHeader} alt='game of life header'/>
                </header>
                <div className='article'>
                    <h1>What is Conway's Game of Life?</h1>
                    <p>
                        The game of life is a cellular automaton that follows 
                        a set of rules created by John Conway. Each cell has a state of 
                        dead or alive. Each generation of the game, along with the rules, 
                        dictates which cells live or die. Each cell has 8 neighbors that 
                        surround it.
                    </p>
                    <p>
                        The game takes an initial pattern and takes off from there. 
                        No additional input is required after the game starts.
                    </p>
                    <p>The rules for life or death or quite simple:</p>
                    <ol>
                        <li>Any cell with less than two or more than three live neighbors survives.</li>
                        <li>Any dead cell with three live neighbors becomes alive.</li>
                    </ol>
                    <p>A cell with less than two neighbors represents underpopulation while a cell with more than three neighbors represents overpopulation.</p>
                    <p>A dead cell with three living neighbors represents reproduction for new life.</p>
                    <div className='links'>
                        <p>Read in more detail about the game and its origins <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>here</a>.</p>
                        <p>View my implementation of the project <a target="_blank" rel="noopener noreferrer" href='https://master.d3qwxtqj51z44s.amplifyapp.com/'>here</a>.</p>
                    </div>
                    
                    <h1>My Approach</h1>
                    <p>
                        I decided to use React.js to visualize my algorithm since this was the framework 
                        I was most comfortable with.
                    </p>
                    <p>
                        The start of my solution involves creating an empty grid using a 2d array 
                        with n number of rows and m number of columns. I represent the state of each 
                        cell using true for alive and false for dead. The grid is initialized with every 
                        cell dead to allow the user to create their own initial state for the game.
                    </p>
                    <img src={GridCreation} alt='Code for the grid creations'/>
                    <p>
                        To implement the generations that the game goes through, I used a concept called 
                        double buffering. This is where the current grid is displayed to the user and 
                        calculations for the next generation happen on a new grid behind the scenes. 
                        Once the calculations are complete, the new grid is displayed and this 
                        process repeats.
                    </p>
                    <p>
                        To calculate the next state of the game, the number of living neighbors 
                        around each cell must be calculated. This is then used to decided if the cell 
                        lives, dies, or remains in its current state. All updates are inserted into the 
                        new grid.
                    </p>
                    <img src={GenerationAlgo} alt='Code for the generation algorithm'/>
                    <p>
                        This process checks each column in each row which implies that the time 
                        complexity for this solution is O(n*m).
                    </p>
                    <div className='links'>
                        <p>View the code for this project <a target="_blank" rel="noopener noreferrer" href='https://github.com/josiahroa18/Game-Of-Life'>here</a>.</p>
                        <p>Follow me on GitHub at <a target="_blank" rel="noopener noreferrer" href='https://github.com/josiahroa18/'>@josiahroa18</a>.</p>
                    </div>
                </div>
            </ArticleContainer>
        </About>
    )
}