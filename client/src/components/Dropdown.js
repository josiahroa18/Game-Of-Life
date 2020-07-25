import React from 'react';
import { DropDown, 
        DownArrow, 
        Menu, 
        SpeedOption, 
        Highlight } from './styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default ({ 
        type, 
        currentMenu, 
        handleMenuChange, 
        children, 
        stateChanger,
        speed 
    }) => {

    const handleClick = () => {
        switch(type){
            case 'rules':
                if(currentMenu === 'rules'){
                    handleMenuChange(null);
                }else{
                    handleMenuChange('rules');
                }
                break;
            case 'presets':
                if(currentMenu === 'presets'){
                    handleMenuChange(null);
                }else{
                    handleMenuChange('presets');
                }
                break
            case 'speed':
                if(currentMenu === 'speed'){
                    handleMenuChange(null);
                }else{
                    handleMenuChange('speed');
                }
                break;
            default:
                handleMenuChange(null);
        }
    }

    const handleClickAway = () => {
        handleMenuChange(null);
    }

    return (
        <DropDown selected={type === currentMenu ? 1 : 0} speed={type === 'speed' ? 1 : 0}>
            <div 
                className='content'
                onClick={handleClick}
            >
                {children}
                <DownArrow/>
            </div>
            {type === 'rules' && currentMenu === 'rules' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='500px' height='260px'>
                        <div className='rules'>
                            <p><Highlight>1. </Highlight> 
                                Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                            </p>
                            <p><Highlight>2. </Highlight> 
                                Any live cell with two or three live neighbours lives on to the next generation.
                            </p>
                            <p><Highlight>3. </Highlight> 
                                Any live cell with more than three live neighbours dies, as if by overpopulation.
                            </p>
                            <p><Highlight>4. </Highlight> 
                                Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                            </p>
                        </div>
                    </Menu>
                </ClickAwayListener>
            )}
            {type === 'presets' && currentMenu === 'presets' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='400px' height='300px'>
                        <div className='presets'>

                        </div>
                    </Menu>
                </ClickAwayListener>
            )}
            {type === 'speed' && currentMenu === 'speed' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='150px' height='100px'>
                        <div className='speed'>
                            <SpeedOption 
                                selected={speed === 1} 
                                onClick={() => stateChanger(1)}
                            >
                                Fast
                            </SpeedOption>
                            <SpeedOption 
                                selected={speed === 2} 
                                onClick={() => stateChanger(2)}
                            >
                                Average
                            </SpeedOption>
                            <SpeedOption 
                                selected={speed === 3} 
                                onClick={() => stateChanger(3)}
                            >
                                Slow
                            </SpeedOption>
                        </div>
                    </Menu>
                </ClickAwayListener>
            )}
        </DropDown>
    );
}