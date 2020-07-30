import React from 'react';
import { About, AboutNav, StyledLink, ArticleContainer } from './styles';
import BlogHeader from '../assets/BlogHeader.png';

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
            </ArticleContainer>
        </About>
    )
}