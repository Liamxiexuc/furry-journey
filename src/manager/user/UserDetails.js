import React from 'react';
import { fetchUserById } from "../../utils/api/user";
import UserInfo from '../menu/components/UserInfo';
import { Header } from 'semantic-ui-react';
import { thisExpression } from '@babel/types';

class UserDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoading: false,
            isEditing: false,
            error: null,
            user: null,
            error: null,  
        };
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        this.loadUser(userId);
    }

    loadUser = userId => this.setState({ isLoading: true}, () => {
        fetchItemById(userId)
            .then(user => this.setState({ user, isLoading: false}))
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
                    userId={this.state.user.id}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    title={this.state.title}
                    gender={this.state.gender}
                    photo={this.state.photo}
                    birthDay={this.state.birthDay}
                    address={this.state.address}
                    isLoading={this.state.isLoading}                
                    reloadPage={this.loadItem}
                    setErrorState={this.setErrorState}
                />
            </React.Fragment>
        )
    }
}

export default UserDetails;