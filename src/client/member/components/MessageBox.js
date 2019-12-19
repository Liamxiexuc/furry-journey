import React from 'react';
import { Feed } from 'semantic-ui-react'
import laura from "../../../assets/laura.jpg";


const date = "3 days ago";
const summary = "Laura Faucet send a message";
const extraText =
  "Have you seen what's going on in Israel? Can you believe it.";

const MessageBox = () => {
    return (
      <Feed>
        <Feed.Event
          image={laura}
          date={date}
          summary={summary}
          extraText={extraText}
        />

        <Feed.Event>
          <Feed.Label image={laura} />
          <Feed.Content date={date} summary={summary} extraText={extraText} />
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={laura} />
          <Feed.Content>
            <Feed.Date content={date} />
            <Feed.Summary content={summary} />
            <Feed.Extra text content={extraText} />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
}

export default MessageBox;