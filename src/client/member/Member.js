import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

import { fetchUserId } from "../../utils/authentication";
import Profile from "./components/Profile";
import MyOrders from './components/MyOrders';
import MyCoupons from './components/MyCoupons';
import MessageBox from './components/MessageBox';
import "./styles/Member.scss";

class Member extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "profile",
      userId: ""
    };
  }

  componentDidMount() {
    this.getUserId();
  }

  getUserId = () => {
    const userId = fetchUserId();
    this.setState({ userId });
  };

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
              {this.state.activeItem === "profile" && (
                <Profile userId={this.state.userId} />
              )}
              {this.state.activeItem === "my orders" && (
                <MyOrders userId={this.state.userId} />
              )}
              {this.state.activeItem === "my coupons" && (
                <MyCoupons userId={this.state.userId} />
              )}
              {this.state.activeItem === "message box" && (
                <MessageBox userId={this.state.userId} />
              )}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Member;
