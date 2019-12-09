import React from "react";
import { Button, Form, Header, Input, Segment } from "semantic-ui-react";

import FlexContainer from "../../UI/flexContainer/FlexContainer";

import "./styles/login.scss";
import { login } from "../../utils/api/auth";
import { setToken } from "../../utils/authentication";
import { ITEM_BASE_URL } from "../../routes/URLMap";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  loginUser = () => {
    this.setState({ isLoading: true }, () => {
      login(this.state.email, this.state.password).then(token => {
        setToken(token);
        this.setState({ isLoading: false });
        const locationState = this.props.location.state;
        const redirectTo =
          (locationState && locationState.from) || ITEM_BASE_URL;
        this.props.history.replace(redirectTo);
      });
    });
  };

  render() {
    return (
      <FlexContainer justifyContentValue="center">
        <Form className="login-form" size="large">
          <Header size="large" textAlign="center">
            Pizza Ordering Management System
          </Header>
          <Segment stacked loading={this.state.isLoading}>
            <Form.Field>
              <Input
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
            </Form.Field>
            <Form.Field>
              <Input
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
            </Form.Field>
            <Button onClick={this.loginUser} size="large" fluid primary>
              Login
            </Button>
          </Segment>
        </Form>
      </FlexContainer>
    );
  }
}

export default Login;