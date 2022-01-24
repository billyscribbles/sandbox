import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    height: 5rem;
`;

export const StyledGrid = styled(Grid)`
    &&& {
        height: 100%;
    }
`;
