import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Button, Container, Divider, Image, Label, Segment, Header} from 'semantic-ui-react';
import { ITEM_BASE_URL } from '../../../route/URLMap';


import { deleteItemById } from '../../../utils/api/item';

const UserInfo = props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const {
        users = [],
        userId,
        firstName,
        lastName,
        email,
        title,
        gender,
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
            deleteItemById(userId)
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
                <p>
                    { firstName }
                </p>
                <p>
                    { lastName }
                </p>
                <p>
                   { email} 
                </p>
                <p>
                    { title }
                </p>
                <p>
                    { gender}
                </p>
                <p>
                    { phone }
                </p>
                <p>
                    { birthDay }
                </p>
                <p>
                    { address }
                </p>
                <Button >
                    Edit
                </Button>
            </Segment>
        </Container>
    );
};

export default withRouter(UserInfo);
