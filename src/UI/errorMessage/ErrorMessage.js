import React from "react";
import { Message, Icon } from "semantic-ui-react";

export const ErrorMessage = ({ error }) => (
         <Message icon error hidden={!error} size="large">
           <Icon name="ambulance" />
           <Message.Content>
           <Message.Header>
             Oops, Something goes wrong
           </Message.Header>
           {error && error.message}
           </Message.Content>
         </Message>
       );

//export default ErrorMessage;
