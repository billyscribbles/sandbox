import React from 'react';
import Link from 'next/link';
import { StyledHeader, StyledGrid } from './Header.style';
import { Grid } from 'semantic-ui-react';

export const Header = function(): JSX.Element {
    return (
        <StyledHeader>
            <StyledGrid columns={3} padded={'horizontally'}>
                <Grid.Row>
                    <Grid.Column stretched verticalAlign="middle">
                        <Link href="/">
                            <a>ICON</a>
                        </Link>
                    </Grid.Column>
                    <Grid.Column stretched verticalAlign="middle">
                        <p>Search Bar</p>
                    </Grid.Column>
                    <Grid.Column stretched verticalAlign="middle">
                        <p>Config</p>
                    </Grid.Column>
                </Grid.Row>
            </StyledGrid>
        </StyledHeader>
    );
};

export default React.memo(Header);
