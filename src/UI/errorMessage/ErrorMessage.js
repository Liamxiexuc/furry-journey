import React from "react";
import { Message, Icon } from "semantic-ui-react";

 const ErrorMessage = props => {
   const error = props.location.state.error;
   //console.log(props);
 //  console.log(error.response.data)
   
  return (
         <Message icon error  size="large">
           <Icon name="ambulance" />
           <Message.Content>
           <Message.Header>
             Oops, Something goes wrong
           </Message.Header>
           {(error && error.response.data) || error.message}
           </Message.Content>
         </Message>
         )
 };

export default ErrorMessage;
