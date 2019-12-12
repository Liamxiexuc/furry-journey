import React from "react";
import { Message, Icon } from "semantic-ui-react";

 const ErrorMessage = ({ props }) => {
   const error = this.props.location.state.error;
   
  return (
         <Message icon error  size="large">
           <Icon name="ambulance" />
           <Message.Content>
           <Message.Header>
             Oops, Something goes wrong
           </Message.Header>
           {error && error.message}
           </Message.Content>
         </Message>
         )
 };

export default ErrorMessage;
