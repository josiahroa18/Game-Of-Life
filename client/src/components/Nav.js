import React, { useState } from 'react';
import { NavWrapper, NavBar, Button, StyledLink, Divider } from './styles';
import DropDown from './Dropdown';


export default ({ handleSpeed, handlePreset, speed }) => {
    const [ currentMenu, setCurrentMenu ] = useState(null);

    const handleMenuChange = selectedMenu => {
        setCurrentMenu(selectedMenu);
    }
    
    return (
        <NavWrapper>
            <NavBar>
                <h1>Game of Life</h1>
                <StyledLink>About</StyledLink>
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
                    stateChanger={handlePreset}
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
                >
                    Speed: {`${speed ? 'Fast' : 'Slow'}`}
                </DropDown>
                <Button>Clear</Button>
                <Button run start>Start</Button>
            </NavBar>
        </NavWrapper>
    )
}