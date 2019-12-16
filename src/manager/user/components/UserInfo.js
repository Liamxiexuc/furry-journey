import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Button, Container, Divider, Image, Label, Segment, Header, List} from 'semantic-ui-react';
import { USER_BASE_URL } from '../../../route/URLMap';


import { deleteUserById } from '../../../utils/api/user';

const UserInfo = props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const {
        users = [],
        userId,
        firstName,
        lastName,
        title,
        gender,
        email,
        phone,
        birthDay,
        address,
        userType,
        isLoading,
        reloadPage,
        history,
        setErrorState,
        location: {pathname: currentPath}
    } = props;

    useEffect(()=> {
        if(isDeleting) {
            deleteUserById(userId)
                .then(() => {
                    history.push( USER_BASE_URL );
                })
                .catch(setErrorState);
            }
    }, [isDeleting]);

    const deleteUser = () => {
        if (window.confirm(`Do you want to delete user ${userId}?`)) {
            setIsDeleting(true)
        }
    };

    return (

        <Container >
            <Image />
            <Header >
                {userId}
            </Header>
            <Segment loading={isLoading} >

                <List >
                    <List.Item>
                        User ID: { userId }
                    </List.Item>
                    <List.Item>
                        First Name: { firstName }
                    </List.Item>
                    <List.Item>
                        Last Name: { lastName }
                    </List.Item>
                    <List.Item>
                        E-mail: { email }
                    </List.Item>
                    <List.Item>
                        Price:  { title }
                    </List.Item>
                    <List.Item>
                        Gender:  { gender}
                    </List.Item>
                    <List.Item>
                        Phone:  { phone }
                    </List.Item>
                    <List.Item>
                        User Type: { userType }
                    </List.Item>
                    <List.Item>
                        Birthday: {  birthDay  }
                    </List.Item>
                    <List.Item>
                        Address: { address }
                    </List.Item>
                </List>
                <Divider />
                <Button as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button loading={isDeleting} onClick={deleteUser}>
                    Delete
                </Button>
                <Button as={Link} to="/users">
                    Back
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(UserInfo);
