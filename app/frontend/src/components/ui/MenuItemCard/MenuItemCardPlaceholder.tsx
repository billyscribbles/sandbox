import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';

export default function MenuCardPlaceholder(): JSX.Element {
    return (
        <Segment raised>
            <Placeholder>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line length="medium" />
                    <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
            </Placeholder>
        </Segment>
    );
}
