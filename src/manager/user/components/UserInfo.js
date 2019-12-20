import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Button, Container, Divider, Segment, List} from 'semantic-ui-react';
import { USER_BASE_URL } from '../../../route/URLMap';
import '../styles/user_info.scss';

import { deleteUserById } from '../../../utils/api/user';

const UserInfo = props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const {
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

        <Container className="user-info-container"  >
            <Segment className="item-info" loading={isLoading} >
                <List className="item-info-detail" >
                    <List.Item className="item-info-label">
                        User ID: 
                    </List.Item>
                    <List.Item className="item-info-content">
                    { userId }
                    </List.Item>
                    <List.Item className="item-info-label">
                        First Name: 
                    </List.Item>
                    <List.Item className="item-info-content">
                    { firstName }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Last Name: 
                    </List.Item>
                    <List.Item className="item-info-content">
                    { lastName }
                    </List.Item>
                    <List.Item className="item-info-label">
                        E-mail: 
                    </List.Item>
                    <List.Item className="item-info-content">
                    { email }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Price:  
                    </List.Item>
                    <List.Item className="item-info-content">
                    { title }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Gender:  
                    </List.Item>
                    <List.Item className="item-info-content">
                     { gender}
                    </List.Item>
                    <List.Item className="item-info-label">
                        Phone:  
                    </List.Item>
                    <List.Item className="item-info-content">
                    { phone }
                    </List.Item>
                    <List.Item className="item-info-label">
                        User Type:  
                    </List.Item>
                    <List.Item className="item-info-content">
                    { userType }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Birthday:  
                    </List.Item>
                    <List.Item className="item-info-content">
                    {  birthDay  }
                    </List.Item>
                    <List.Item className="item-info-label">
                        Address:  
                    </List.Item>
                    <List.Item className="item-info-content">
                    { address }
                    </List.Item>
                </List>
                <Divider />
                <Button className="item-info-edit" as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button className="item-info-delete" loading={isDeleting} onClick={deleteUser}>
                    Delete
                </Button>
                <Button className="item-info-back" as={Link} to="/users">
                    Back
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(UserInfo);
