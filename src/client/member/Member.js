import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

import { getToken } from "../../utils/authentication";
import jwt from "jsonwebtoken";
import  Profile  from "./components/profile";
import "./styles/Member.scss";

class Member extends Component {
  state = { activeItem: "profile", userId: "" };

  componentDidMount() {
    this.getUserId();
  }

  getUserId = () => {
  const token = getToken();
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;
  this.setState({ userId });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="member-body-container">
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="profile"
                active={activeItem === "profile"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="my orders"
                active={activeItem === "my orders"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="my coupons"
                active={activeItem === "my coupons"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="message box"
                active={activeItem === "message box"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              <Profile userId={this.state.userId} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Member;
