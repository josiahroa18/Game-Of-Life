import React from 'react';
import { DropDown, DownArrow, Menu } from './styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default ({ type, currentMenu, handleMenuChange, children }) => {

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
        <DropDown>
            <div 
                className='content'
                onClick={handleClick}
            >
                {children}
                <DownArrow/>
            </div>
            {type === 'rules' && currentMenu === 'rules' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='300px' height='300px'>

                    </Menu>
                </ClickAwayListener>
            )}
            {type === 'presets' && currentMenu === 'presets' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='300px' height='300px'>

                    </Menu>
                </ClickAwayListener>
            )}
            {type === 'speed' && currentMenu === 'speed' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='300px' height='300px'>

                    </Menu>
                </ClickAwayListener>
            )}
        </DropDown>
    );
}