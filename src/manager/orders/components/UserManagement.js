import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import PersonManagement from '../../../UI/personManagement/PersonManagement';
import {
    addUserToOrder,
    fetchUsers,
    removeUserToOrder
} from '../../../utils/api/user';

class UserManagement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isActionSuccessful: false,
            isAddingOrRemoving: false,
            isSearching: false,
            pagination: {},
            userToAdd: '',
            userToRemove: '',
            users: [],
        };
    }

    searchUser = query => {
        this.setState({ isSearching: true }, () => {
            fetchUsers(1, 100, query)
                .then(userData => this.setState({
                    isSearching: false,
                    pagination: userData.pagination,
                    lecturers: userData.users,
                }))
                .catch(error => this.setState({ error }));

        });
    }

    setUserToAdd = userToAdd => this.setState({ userToAdd, isActionSuccessful: false })

    setUserToRemove = userToRemove => this.setState({ userToRemove, isActionSuccessful: false })

    handleSuccess = () => {
        this.setState({ isAddingOrRemoving: false, isActionSuccessful: true });
        this.props.reloadPage(this.props.userId);
    }

    addUser = () => {
        this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
            addUserToOrder(this.state.userToAdd, this.props.userId)
                .then(this.handleSuccess)
                .catch(error => this.setState({ error }));
        });
    }

    removeUser = () => {
        this.setState({ isAddingOrRemoving: true, isActionSuccessful: false }, () => {
            removeUserToOrder(this.state.userToRemove, this.props.userId)
                .then(this.handleSuccess)
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <Modal
                trigger={<Button positive>Manage Dishes</Button>}
            >
                <PersonManagement
                    error={this.state.error}
                    handleAdd={this.addUser}
                    handlePersonToAddChange={this.setUserToAdd}
                    handlePersonToRemoveChange={this.setUserToRemove}
                    handleRemove={this.removeUser}
                    handleSearchChange={this.searchUser}
                    isActionSuccessful={this.state.isActionSuccessful}
                    isAddingOrRemoving={this.state.isAddingOrRemoving}
                    isSearching={this.state.isSearching}
                    personsToAdd={this.state.users}
                    personsToRemove={this.props.selectedUsers}
                    personToAdd={this.state.userToAdd}
                    personToRemove={this.state.userToRemove}
                />
            </Modal>
        );
    }
}

export default UserManagement;