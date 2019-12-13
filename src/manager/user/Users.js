import React from 'react';
import {Container, Segment, Pagination, Button, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import UserCard from './components/UserCard';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import FlexContainer from '../../UI/flexContainer/FlexContainer';

import { USER_BASE_URL } from '../../route/URLMap';
// import './styles/user.scss';
import { fetchUsers } from '../../utils/api/user';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isLoading: false,
            error: null,
            pagination: {},
            
        };
        
    }

    componentDidMount() {
        this.loadUsers();         
    }

    loadUsers = (pageNum, pageSize) => {
        this.setState({ isLoading: true, users: []}, ()=> {
            fetchUsers(pageNum, pageSize)
                .then(this.updateItemData)
                .catch(error => this.setState({error}));
        });
        
    }

    updateItemData = userData => {
        this.setState({
            users: userData.users,
            isLoading: false,
            pagination: userData.pagination,
        })
        
    }

    handlePageChange = (event, data) => {
        this.loadUsers(data.activePage);
    }

    

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2">
                    Users
                </Header>
                <Container >
                    <Button as={Link} to={`${currentPath}/new`} >
                        Create a New User
                    </Button>
                    <Segment basic loading={this.state.isLoading} >
                        <FlexContainer justifyContentValue = "space-between">
                            {this.state.users.map(user => (
                                <UserCard 
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                title={user.title}
                                gender={user.gender}
                                    key={user.id}
                                    to={`${USER_BASE_URL}/${user.id}`}
                                />
                            ))}
                        </FlexContainer>
                    </Segment>
                    {
                        this.state.pagination.page && (
                            <FlexContainer >
                                <Pagination 
                                    activePage={this.state.pagination.page}
                                    disabled={this.state.isLoading}
                                    onPageChange={this.handlePageChange}
                                    totalPages={this.state.pagination.pages}
                                />
                            </FlexContainer>
                        )
                    }
                </Container>    
            </React.Fragment>
        );
    }
};

export default Users;