import React from 'react';
import { Table, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserRow = props => {
    return (
        // <Card >
        //     <Card.Content>
        //         <Card.Header>
        //             User
        //         </Card.Header>
        //         <Card.Header>
        //             First Name: {props.firstName}
        //         </Card.Header>
        //         <Card.Header>
        //             Last Name: {props.lastName}
        //         </Card.Header>
        //         <Card.Header>
        //             E-mail: {props.email}
        //         </Card.Header>
        //         <Card.Description>
        //             User Title: {props.title}
        //         </Card.Description>
        //         <Card.Description>
        //             Gender: {props.gender}
        //         </Card.Description>
        //         <Card.Description>
        //             Phone: {props.phone}
        //         </Card.Description>
        //         <Card.Description>
        //             Birthday: {props.birthday}
        //         </Card.Description>
        //         <Card.Description>
        //             Address: {props.address}
        //         </Card.Description>
        //         <Card.Description>
        //             User Type: {props.userType}
        //         </Card.Description>
        //     </Card.Content>
        // </Card>
        <Table.Row  className="item-table-row"  >
            <Table.Cell className="item-table-cell">
                {props.id}
            </Table.Cell>      
            <Table.Cell className="item-table-cell">
                {props.firstName}
            </Table.Cell>
            <Table.Cell>
                {props.lastName}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.title}
            </Table.Cell>
            <Table.Cell>
                {props.email}
            </Table.Cell>

            <Table.Cell className="item-table-cell">
                {props.gender}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.address}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.birthday}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.phone}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.userType}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                <Button as={Link} to={props.to}> More</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default UserRow;