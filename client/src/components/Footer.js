import React from 'react';
import { Footer, StyledLink, VerticalDivider } from './styles';

export default () => {
    return (
        <Footer>
            <StyledLink to='/about'>About</StyledLink>
            <VerticalDivider style={{ margin: '0 20px'}}/>
            <p>Deveolped by <a target="_blank" rel="noopener noreferrer" href='https://github.com/josiahroa18'>@josiahroa</a></p>
        </Footer>
    )
}