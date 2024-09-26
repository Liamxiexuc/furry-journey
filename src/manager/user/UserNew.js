import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import UserForm from './components/UserForm';


import { createUser } from "../../utils/api/user";
import { USER_BASE_URL } from '../../route/URLMap';


class UserNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            title: '',
            gender: '',
            phone: '',
            birthDay: '',
            address: '',
            isCreating: false,
            error: null,
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value});
    }

    handleCreate = () => {
        const user = {...this.state};
        this.setState({ isCreating: true}, () => {
            createUser(user)
                .then(newUser => {
                    this.props.history.push(`${USER_BASE_URL}/${newUser.id}`);
                })
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header >
                    Create User
                </Header>
                <Segment loading={this.state.isCreating}>
                    <UserForm 
                        id={this.state.id}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        title={this.state.title}
                        gender={this.state.gender}
                        phone={this.state.phone}
                        birthDay={this.state.phone}
                        address={this.state.address}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleCreate}
                        submitButtonText="Create"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default UserNew;