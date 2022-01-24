import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const HeadingBannerWrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    padding-top: 1em;
    padding-left: 1em;
    margin-right: 1rem;
    border-radius: 50%;
`;

export const StyledHeader = styled(Header)`
    &&& {
        padding: 0;
        margin: 0;
    }
`;
