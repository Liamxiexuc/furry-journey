import React from "react";
import { Message } from "semantic-ui-react";
import "../styles/SignUp.scss";

const SignupSuccess = () => (
  <div className="b-message-container">
    <Message
      success
      compact
      icon="thumbs up"
      size="big"
      header="Your user registration was successful!"
      content="You may now log-in with the username you have chosen"
    />
  </div>
);

export default SignupSuccess;
