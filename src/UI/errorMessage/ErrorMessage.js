import React from "react";
import { Message, Icon } from "semantic-ui-react";

export const ErrorMessage = ({ error }) => (
  <Message icon error hidden={!error}>
    <Icon name="ambulance" />
    <Message.Header>Oops, Something goes wrong</Message.Header>
    <p>{error && error.message}</p>
  </Message>
);

//export default ErrorMessage;
