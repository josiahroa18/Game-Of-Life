import React from 'react';
import { DropDown, DownArrow, Menu, SpeedOption } from './styles';
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
                    <Menu width='500px' height='300px'>
                        <div className='rules'>

                        </div>
                    </Menu>
                </ClickAwayListener>
            )}
            {type === 'presets' && currentMenu === 'presets' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='300px' height='300px'>
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