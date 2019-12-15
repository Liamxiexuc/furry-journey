import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Input,
  Popup,
  Dropdown
} from "semantic-ui-react";
import "./styles/SignUp.scss";
import { signup } from "../../utils/api/auth";
import { AFTER_SIGNUP_URL } from "../../routes/URLMap";


const titleOptions = [
  { key: "mr", text: "Mr.", value: "Mr." },
  { key: "mrs", text: "Mrs.", value: "Mrs." },
  { key: "miss", text: "Miss", value: "Miss" },
  { key: "ms", text: "Ms.", value: "Ms." }
];

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Others", value: "others" }
];

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      title: "",
      gender: "",
      phone: "",
      birthDay: "",
      address: "",
      isActive: false,
      isLoading: false,
      error: null
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleCheck = (event, data) => {
    const isActive = data.checked;
    this.setState({ isActive });
  };

  handleDropBox = (event, data) => {
    console.log(data);
    const key = data.name;
    const value = data.value;
    this.setState({ [key]: value });
  };

  handleSignup = () => {
    this.setState({ isLoading: true },
      () => {
        signup(
          this.state.email,
          this.state.password,
          this.state.title,
          this.state.firstName,
          this.state.lastName,
          this.state.gender,
          this.state.phone,
          this.state.birthDay,
          this.state.address
        )
          .then(this.props.history.replace(AFTER_SIGNUP_URL))
          .catch(error => this.setState({ error, isLoading: false }));
      });
  };

  render() {
    return (
      <div className="signup-form-container">
        <Form>
          <Header
            className="signup-form-header"
            size="large"
            textAlign="center"
          >
            Create Your NewBee Account
          </Header>
          <Form.Field required>
            <label>E-mail</label>
            <Input
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              type="email"
            />
          </Form.Field>
          <Form.Field required>
            <label>password</label>
            <Popup
              trigger={
                <Input
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
              }
              header="Enter Your Password"
              content="Your password must be between 8 and 30 characters and contain at least one lowercase letter, one uppercase letter, one number digit and one special character (~!@&%#_)."
              on="focus"
              wide="very"
            />
          </Form.Field>
          <Form.Group>
            <Form.Field required width={6}>
              <label>Title</label>
              <Dropdown
                placeholder="Title"
                search
                selection
                options={titleOptions}
                onChange={this.handleDropBox}
                name="title"
              />
            </Form.Field>
            <Form.Field required>
              <label>First Name</label>
              <Input
                onChange={this.handleChange}
                name="firstName"
                value={this.state.firstName}
                icon="user"
                iconPosition="left"
                placeholder="First name"
              />
            </Form.Field>
            <Form.Field required>
              <label>Last Name</label>
              <Input
                onChange={this.handleChange}
                name="lastName"
                value={this.state.lastName}
                icon="user"
                iconPosition="left"
                placeholder="Last name"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field required>
              <label>Phone Number</label>
              <Input
                onChange={this.handleChange}
                name="phone"
                value={this.state.phone}
                placeholder="Phone number"
                icon="phone"
                iconPosition="left"
                type="number"
              />
            </Form.Field>
            <Form.Field required>
              <label>Gender</label>
              <Dropdown
                placeholder="Gender"
                search
                selection
                options={genderOptions}
                onChange={this.handleDropBox}
                name="gender"
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>address</label>
            <Input
              onChange={this.handleChange}
              name="address"
              value={this.state.address}
              icon="home"
              iconPosition="left"
              placeholder="Address"
            />
          </Form.Field>
          <Form.Field>
            <label>Birth Day</label>
            <Input
              onChange={this.handleChange}
              name="birthDay"
              value={this.state.birthDay}
              icon="calendar"
              iconPosition="left"
              placeholder="Birth day"
              type="date"
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              name="checkBox"
              checked={this.state.isActive}
              onChange={this.handleCheck}
              label="I agree to the Terms and Conditions"
            />
          </Form.Field>
          <Button
            disabled={this.state.isActive === true ? false : true}
            type="submit"
            size="big"
            onClick={this.handleSignup}
            primary
            fluid
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
