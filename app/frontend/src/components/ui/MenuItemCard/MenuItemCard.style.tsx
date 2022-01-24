import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

export const StyledSegment = styled(Segment)`
    &&& {
        padding: 0;
        cursor: pointer;
    }
`;

export const MenuCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
`;

export const TextWrapper = styled.div`
    padding: 1rem;
`;

export const ImageWrapper = styled.div`
    height: 12rem;
    width: 12rem;
    text-align: center;
`;

export const StyledDescriptionText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
    height: 4.2em;
`;
