import React from "react";
import { Message } from "semantic-ui-react";

const AfterCheckOut = () => (
  <div className="b-message-container">
    <Message
      success
      compact
      icon="thumbs up"
      size="big"
      header="Your order was successful!"
      content="Delicious will comming soon!"
    />
  </div>
);

export default AfterCheckOut;
