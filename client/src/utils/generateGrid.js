export const createEmptyGrid = (rowCount, colCount) => {
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

export const createRandomGrid = (rowCount, colCount) => {
    const rows = []
    for(let i=0; i<rowCount; i++){
        const cols = []
        for(let j=0; j<colCount; j++){
            cols.push(Math.random() > 0.2 ? 0 : 1);
        }
        rows.push(cols);
    }
    return rows
}

export const createToadGrid = (rowCount, colCount) => {
    const middleY = Math.floor(rowCount / 2);
    const middleX = Math.floor(colCount / 2);
    const rows = []
    for(let i=0; i<rowCount; i++){
        const cols = []
        for(let j=0; j<colCount; j++){
            if((j === middleX && i === middleY) ||
            (j === middleX + 1 && i === middleY) || 
            (j === middleX - 1 && i === middleY) ||
            (j === middleX && i === middleY - 1) || 
            (j === middleX + 1 && i === middleY - 1) || 
            (j === middleX + 2 && i === middleY -1)){
                cols.push(1);
            }
            else{
            cols.push(0);
            }
        }
        rows.push(cols);
    }
    return rows
}

export const createPulsarGrid = (rowCount, colCount) => {
    const middleY = Math.floor(rowCount / 2);
    const middleX = Math.floor(colCount / 2);
    const rows = []
    for(let i=0; i<rowCount; i++){
        const cols = []
        for(let j=0; j<colCount; j++){            
            cols.push(0);
        }
        rows.push(cols);
    }
    // First pass solution *yikes*
    rows[middleY + 1][middleX + 2] = 1;
    rows[middleY + 1][middleX + 3] = 1;
    rows[middleY + 1][middleX + 4] = 1;
    rows[middleY + 1][middleX - 2] = 1;
    rows[middleY + 1][middleX - 3] = 1;
    rows[middleY + 1][middleX - 4] = 1;

    rows[middleY - 1][middleX + 2] = 1;
    rows[middleY - 1][middleX + 3] = 1;
    rows[middleY - 1][middleX + 4] = 1;
    rows[middleY - 1][middleX - 2] = 1;
    rows[middleY - 1][middleX - 3] = 1;
    rows[middleY - 1][middleX - 4] = 1;

    rows[middleY + 2][middleX + 1] = 1;
    rows[middleY + 3][middleX + 1] = 1;
    rows[middleY + 4][middleX + 1] = 1;
    rows[middleY - 2][middleX + 1] = 1;
    rows[middleY - 3][middleX + 1] = 1;
    rows[middleY - 4][middleX + 1] = 1;

    rows[middleY + 2][middleX - 1] = 1;
    rows[middleY + 3][middleX - 1] = 1;
    rows[middleY + 4][middleX - 1] = 1;
    rows[middleY - 2][middleX - 1] = 1;
    rows[middleY - 3][middleX - 1] = 1;
    rows[middleY - 4][middleX - 1] = 1;

    rows[middleY + 6][middleX + 2] = 1;
    rows[middleY + 6][middleX + 3] = 1;
    rows[middleY + 6][middleX + 4] = 1;
    rows[middleY - 6][middleX + 2] = 1;
    rows[middleY - 6][middleX + 3] = 1;
    rows[middleY - 6][middleX + 4] = 1;

    rows[middleY + 6][middleX - 2] = 1;
    rows[middleY + 6][middleX - 3] = 1;
    rows[middleY + 6][middleX - 4] = 1;
    rows[middleY - 6][middleX - 2] = 1;
    rows[middleY - 6][middleX - 3] = 1;
    rows[middleY - 6][middleX - 4] = 1;

    rows[middleY + 2][middleX + 6] = 1;
    rows[middleY + 3][middleX + 6] = 1;
    rows[middleY + 4][middleX + 6] = 1;
    rows[middleY + 2][middleX - 6] = 1;
    rows[middleY + 3][middleX - 6] = 1;
    rows[middleY + 4][middleX - 6] = 1;

    rows[middleY - 2][middleX + 6] = 1;
    rows[middleY - 3][middleX + 6] = 1;
    rows[middleY - 4][middleX + 6] = 1;
    rows[middleY - 2][middleX - 6] = 1;
    rows[middleY - 3][middleX - 6] = 1;
    rows[middleY - 4][middleX - 6] = 1;
    return rows
}