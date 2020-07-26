import React, { useState } from 'react';
import { NavWrapper, NavBar, Button, StyledLink, Divider } from './styles';
import DropDown from './Dropdown';
import { useRenderCount } from '../utils/useRenderCount';


export default React.memo(({ 
        handleSpeed, 
        speed, 
        running, 
        toggleRunning, 
        handleClear, 
        generatePreset 
    }) => {

    const [ currentMenu, setCurrentMenu ] = useState(null);

    const handleMenuChange = selectedMenu => {
        setCurrentMenu(selectedMenu);
    }

    useRenderCount();
    
    return (
        <NavWrapper>
            <NavBar>
                <h1>Game of Life</h1>
                <StyledLink to='/about'>About</StyledLink>
                <DropDown 
                    type='rules'
                    currentMenu={currentMenu}
                    handleMenuChange={handleMenuChange}
                >
                    Rules
                </DropDown>
                <Divider/>
                <DropDown 
                    type='presets' 
                    stateChanger={generatePreset}
                    currentMenu={currentMenu}
                    handleMenuChange={handleMenuChange}
                >
                    Presets
                </DropDown>
                <DropDown 
                    type='speed' 
                    stateChanger={handleSpeed}
                    currentMenu={currentMenu}
                    handleMenuChange={handleMenuChange}
                    speed={speed}
                >
                    Speed: {`${(speed === 100 && 'Fast') || (speed === 500 && 'Average') || (speed === 1000 && 'Slow')}`}
                </DropDown>
                <Button onClick={() => handleClear()}>Clear</Button>
                <Button 
                    run 
                    start={running ? 1 : 0}
                    onClick={() => toggleRunning()}
                >
                    {running ? 'Stop' : 'Start'}
                </Button>
            </NavBar>
        </NavWrapper>
    )
})