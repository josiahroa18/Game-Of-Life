import React from 'react';
import { StatsWrapper, Stats } from './styles';

export default ({ generationCount }) => {
    return (
        <StatsWrapper>
            <Stats>
                <p>Generations: {generationCount}</p>
            </Stats>
        </StatsWrapper>
    );
}