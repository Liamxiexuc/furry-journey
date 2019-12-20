import React from "react";
import "./styles/AboutUs.scss"
import { Card, Placeholder } from "semantic-ui-react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>
      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </React.Fragment>
  );
};

export default AboutUs;
