import React from 'react';
import { Table,  Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/user.scss';

const UserRow = props => {
    return (
        <Table.Row  className="item-table-row"  >
            <Table.Cell className="item-table-cell">
                {props.id}
            </Table.Cell>      
            <Table.Cell className="item-table-cell">
                {props.firstName}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.lastName}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.title}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
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
                <Button className="item-more" as={Link} to={props.to}> More</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default UserRow;