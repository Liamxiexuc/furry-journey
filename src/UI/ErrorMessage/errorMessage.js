import React from './node_modules/react';
import { Message } from './node_modules/semantic-ui-react';

const ErrorMessage = ({ error }) => (
    <Message 
        error
        hidden={!error}
    >
        <Message.Header>
            Sorry, Something went wrong
        </Message.Header>
        <p>{error && error.message}</p>
    </Message>

);

export default ErrorMessage
