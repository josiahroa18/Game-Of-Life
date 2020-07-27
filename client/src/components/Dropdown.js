import React from 'react';
import { DropDown, 
        DownArrow, 
        Menu, 
        SpeedOption,
        PresetOption, 
        Highlight,
        HorizontalDivider } from './styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Random from '../assets/Random.png';
import Toad from '../assets/Toad.gif';
import Pulsar from '../assets/Pulsar.gif';

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
                    <Menu width='500px' height='260px' style={{ cursor: 'default' }}>
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
                    <Menu width='400px' height='600px'>
                        <div className='presets'>
                            <HorizontalDivider/>
                            <PresetOption onClick={() => {
                                    handleClickAway();
                                    stateChanger('RANDOM');
                                }}>
                                <img src={Random} alt='Random generation'/>
                                <p>Random generation</p>
                            </PresetOption>
                            <HorizontalDivider/>
                            <PresetOption onClick={() => {
                                    handleClickAway();
                                    stateChanger('TOAD');
                                }}>
                                <img src={Toad} alt='Toad preset'/>
                                <p>Toad preset</p>
                            </PresetOption>
                            <HorizontalDivider/>
                            <PresetOption onClick={() => {
                                    handleClickAway();
                                    stateChanger('PULSAR');
                                }}>
                                <img src={Pulsar} alt='Pulsar preset'/>
                                <p>Pulsar preset</p>
                            </PresetOption>
                            <HorizontalDivider/>
                        </div>
                    </Menu>
                </ClickAwayListener>
            )}
            {type === 'speed' && currentMenu === 'speed' && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Menu width='150px' height='100px'>
                        <div className='speed'>
                            <SpeedOption 
                                selected={speed === 100} 
                                onClick={() => stateChanger(100)}
                            >
                                Fast
                            </SpeedOption>
                            <SpeedOption 
                                selected={speed === 500} 
                                onClick={() => stateChanger(500)}
                            >
                                Average
                            </SpeedOption>
                            <SpeedOption 
                                selected={speed === 1000} 
                                onClick={() => stateChanger(1000)}
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