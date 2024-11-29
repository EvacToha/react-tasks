import React from 'react';
import {GridContainer} from './styles';

const GridCounters = ({ children }: { children: React.ReactNode }) => {
    return (
        <GridContainer>
            {children}
        </GridContainer>
    );
};

export default GridCounters;