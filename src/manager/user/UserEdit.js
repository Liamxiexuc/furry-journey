import React from 'react';
import UserForm from './components/ItemForm';
//import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import { USER_BASE_URL } from '../../route/URLMap';
import {fetchUserById, saveUserById} from '../../utils/api/user';

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            error: null,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            title: '',
            gender: '',
            phone: '',
            birthDay: '',
            address: '',
            isLoading: false,
            isSaving: false,
            
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.setState( {isLoading: true}, () => {
            fetchUserById(userId)
                .then(user => this.setState ({
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    title: user.title,
                    gender: user.gender,
                    phone: user.phone,
                    birthDay: user.birthDay,
                    address: user.address,
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
        const id = this.props.match.params.id;
        this.setState({ isSaving: true}, () => {
            saveItemById(id, user)
                .then(() => this.props.history.push(`${USER_BASE_URL}/${id}`))
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
                        email={this.state.email}
                        title={this.state.title}
                        gender={this.state.gender}
                        phone={this.state.phone}
                        birthDay={this.birthDay}
                        address={this.address}
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