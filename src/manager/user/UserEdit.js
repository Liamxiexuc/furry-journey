import React from 'react';
import {Segment} from 'semantic-ui-react';
import UserForm from './components/UserForm';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import Header from '../../UI/header/Header';
import { USER_BASE_URL } from '../../route/URLMap';
import {fetchUserById, saveUserById} from '../../utils/api/user';

class UserEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            error: null,
            firstName: '',
            lastName: '',
            email: '',
            title: '',
            gender: '',
            phone: '',
            birthDay: '',
            address: '',
            userType: '',
            isLoading: false,
            isSaving: false,
            
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.setState( {isLoading: true}, () => {
            fetchUserById(userId)
                .then(user => this.setState (
                    {
                    id: userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    title: user.title,
                    email: user.email,
                    gender: user.gender,
                    phone: user.phone,
                    birthDay: user.birthDay,
                    address: user.address,
                    userType: user.userType,
                    isLoading: false,
                    isSaving: false,
                }))
                .catch(error => this.setState({ error }));
        });
    }

    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleSave = () => {
        const user = {...this.state};
        delete user.isLoading;
        delete user.isSaving;
        delete user.error;
        const id = this.props.match.params.id;
        this.setState({ isSaving: true}, () => {
            saveUserById(id, user)
                .then(() => this.props.history
                    .push(`${USER_BASE_URL}/${id}`))
                        .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header >
                    Edit User
                </Header>
                <Segment loading={this.state.isLoading || this.state.isSaving} >
                    <UserForm 
                        id={this.state.id}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        title={this.state.title}
                        email={this.state.email}
                        gender={this.state.gender}
                        phone={this.state.phone}
                        birthDay={this.state.birthDay}
                        address={this.state.address}
                        userType={this.state.userType}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSave}
                        submitButtonText="Save"
                    />
                </Segment>
            </React.Fragment>
        );
    }
}

export default UserEdit;