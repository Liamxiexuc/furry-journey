import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Input,
  Dropdown,
  Confirm
} from "semantic-ui-react";
import "../styles/Member.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { fetchUser, saveUserInfo } from "../../../utils/api/user";
import { ERROR_URL } from "../../../routes/URLMap";

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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      title: "",
      gender: "",
      phone: "",
      birthDay: "",
      address: "",
      isLoading: false,
      error: null,
      isSave: false
    };
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  loadUserInfo = () => {
    this.setState({ isLoading: true }, () => {
      const userId = this.props.userId;
      fetchUser(userId)
        .then(userData => {
          this.setState({
            isLoading: false,
            id: userData.data._id,
            firstName: userData.data.firstName,
            lastName: userData.data.lastName,
            email: userData.data.email,
            title: userData.data.title,
            gender: userData.data.gender,
            phone: userData.data.phone,
            birthDay: userData.data.birthDay,
            address: userData.data.address
          });
        })
        .catch(error =>
          this.setState({ error, isLoading: false }, () => {
            this.props.history.push({
              pathname: ERROR_URL,
              state: { error: this.state.error }
            });
          })
        );
    });
  };

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleDropBox = (event, data) => {
    const key = data.name;
    const value = data.value;
    this.setState({ [key]: value });
  };

  handleSave = () => {
    this.setState({ isLoading: true }, () => {
      saveUserInfo(
        this.props.userId,
        this.state.title,
        this.state.firstName,
        this.state.lastName,
        this.state.gender,
        this.state.phone,
        this.state.birthDay,
        this.state.address
      )
        .then(<Redirect to="/member" />)
        .then(this.setState({ isLoading: false, isSave: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    });
  };

  handleCancel = () => this.setState({ isSave: false });

  show = () => {
    this.setState({ isSave: true });
  };

  render() {
    return (
      <div className="profile-container">
        <Form>
          <Header
            className="signup-form-header"
            size="large"
            textAlign="center"
          >
            My Account
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
              readOnly
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
                value={this.state.title}
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
                required
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
                required
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
                required
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
                required
                value={this.state.gender}
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
              valuedefault=""
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
              valuedefault=""
            />
          </Form.Field>

          <Button
            type="submit"
            size="big"
            primary
            fluid
            onClick={this.show}
            loading={this.state.isLoading === true ? true : false}
          >
            Save
          </Button>
          <Confirm
            open={this.state.isSave}
            onCancel={this.handleCancel}
            onConfirm={this.handleSave}
            header="Save Your Profile"
            size="small"
          />
        </Form>
      </div>
    );
  }
}

export default Profile;
