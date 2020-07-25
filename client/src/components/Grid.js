import React from 'react';
import { GridWrapper, Grid, Cell } from './styles';

export default ({ preset, grid, colCount, handleCellClick }) => {
    return (
        <GridWrapper>
            <Grid colCount={colCount}>
                {grid.map((row, i) => row.map((col, j) => (
                    <Cell 
                        key={`${i}-${j}`} 
                        live={grid[i][j]}
                        onClick={() => handleCellClick(i, j)}
                    />
                )))}
            </Grid>
        </GridWrapper>
    );
}