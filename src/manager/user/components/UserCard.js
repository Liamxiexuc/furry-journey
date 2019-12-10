import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserCard = props => {
    return (
        <Card >
            <Card.Content>
                <Card.Header>
                    User
                </Card.Header>
                <Card.Header>
                    First Name: {props.firstName}
                </Card.Header>
                <Card.Header>
                    Last Name: {props.lastName}
                </Card.Header>
                <Card.Header>
                    E-mail: {props.email}
                </Card.Header>
                <Card.Description>
                    User Title: {props.title}
                </Card.Description>
                <Card.Description>
                    Gender: {props.gender}
                </Card.Description>
                <Card.Description>
                    Phone: {props.phone}
                </Card.Description>
                <Card.Description>
                    Birthday: {props.birthday}
                </Card.Description>
                <Card.Description>
                    Address: {props.address}
                </Card.Description>
                <Card.Description>
                    User Type: {props.userType}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default UserCard;