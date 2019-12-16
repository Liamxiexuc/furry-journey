import React from 'react';
import { fetchUserById } from "../../utils/api/user";
import UserInfo from '../user/components/UserInfo';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage'
import Header from '../../UI/header/Header';
import { thisExpression } from '@babel/types';

class UserDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            isEditing: false,
            error: null,
            user: {},
            error: null,  
        };
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        this.loadUser(userId);
    }

    loadUser = userId => this.setState({ isLoading: true}, () => {
        fetchUserById(userId)
            .then(user => this.setState(
                { user, isLoading: false}))
            .catch(this.setErrorState);
    });


    setErrorState = error => this.setState({error});

    render() {
        return(
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header >
                    Dish Details
                </Header>
                <UserInfo 
                    userId={this.state.user._id}
                    firstName={this.state.user.firstName}
                    lastName={this.state.user.lastName}
                    title={this.state.user.title}
                    email={this.state.user.email}
                    gender={this.state.user.gender}
                    phone={this.state.user.phone}
                    userType={this.state.user.userType}
                    birthDay={this.state.user.birthDay}
                    address={this.state.user.address}
                    isLoading={this.state.isLoading}                
                    reloadPage={this.loadUser}
                    setErrorState={this.setErrorState}
                />
            </React.Fragment>
        )
    }
}

export default UserDetails;