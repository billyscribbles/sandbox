import React from 'react';
import { Segment, Container, Message } from 'semantic-ui-react';

export default function ErrorMessage(): JSX.Element {
    return (
        <Segment placeholder>
            <Container>
                <Message info>
                    <Message.Header>Unfortunately menu is unavailable</Message.Header>
                    <p>Please contact the restaurant directly</p>
                </Message>
            </Container>
        </Segment>
    );
}
