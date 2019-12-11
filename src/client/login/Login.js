import React from "react";
import { Button, Form, Divider, Grid, Input, Segment, Message } from "semantic-ui-react";

import "./styles/login.scss";
import { login } from "../../utils/api/auth";
import { setToken } from "../../utils/authentication";
import { ITEM_CLIENT_BASE_URL, SIGNUP_CLIENT_URL } from "../../routes/URLMap";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      error: null
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
          (locationState && locationState.from) || ITEM_CLIENT_BASE_URL;
        this.props.history.replace(redirectTo);
      })
      .catch(error => this.setState({ error, isLoading: false }));
    });
  };

  signupUser = () => {
    this.props.history.replace(SIGNUP_CLIENT_URL);
  }

  render() {
    return (
      <div className="b-form-container">
        <Segment size="massive" stacked loading={this.state.isLoading}>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form className="login-form" size="large" error>
                <Form.Field>
                  <Input
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                    width="14"
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
                <Message
                  hidden={this.state.error === null ? true : false}
                  error
                  header="Invalid Email / Password"
                  content="You can only sign in with a valid e-mail address and password."
                />
                <Button onClick={this.loginUser} size="large" fluid primary>
                  Login
                </Button>
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle" textAlign="center">
              <Button
                onClick={this.signupUser}
                content="Sign up"
                icon="signup"
                size="big"
                secondary
              />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    );
  }
}

export default Login;
