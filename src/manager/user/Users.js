import React from 'react';
import {Container, Segment, Header, Table} from 'semantic-ui-react';
import UserRow from './components/UserRow';
import ErrorMessage from '../../UI/ErrorMessage/errorMessage';
import FlexContainer from '../../UI/flexContainer/FlexContainer';

import { USER_BASE_URL, ERROR_URL } from '../../route/URLMap';
import './styles/user.scss';
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
        this.setState({ isLoading: true}, () => {
            fetchUsers()
                .then(userData => {
                    this.setState(
                        {
                            isLoading: false,
                            users: userData.data
                        });
                })
                .catch(error =>
                    this.setState({error, isLoading: false}, error => {
                        this.props.history.push({ pathname: ERROR_URL, state: {error}});
                    }))
        })         
    }
  

    render() {
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2">
                    Users
                </Header>
                <Container className="admin-item-container" >
                    <Segment className="admin-item-container-inner" basic loading={this.state.isLoading} >
                        <FlexContainer justifyContentValue = "space-between">
                        <Table className="item-table-card" >
                            <Table.Header className="item-table-header">
                                <Table.Row className="item-table-header-col">
                                    <Table.HeaderCell className="header-label">User ID</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">First Name</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Last Name</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Title</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">E-mail</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Gender</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Address</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Birthday</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">Phone</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">User Type</Table.HeaderCell>
                                    <Table.HeaderCell className="header-label">More</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body  className="admin-table-body">
                                {this.state.users.map(user => (
                                    <UserRow 
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                        title={user.title}
                                        email={user.email}
                                        gender={user.gender}
                                        address={user.address}
                                        birthDay={user.birthDay}
                                        phone={user.phone}
                                        userType={user.userType}
                                        id={user._id}
                                        to={`${USER_BASE_URL}/${user._id}`}
                                    />
                                ))}
                            </Table.Body>
                        </Table>
                        </FlexContainer>
                    </Segment>
                </Container>    
            </React.Fragment>
        );
    }
};

export default Users;