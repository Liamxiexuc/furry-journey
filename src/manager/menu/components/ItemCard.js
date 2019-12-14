import React from 'react';
import { Card, Image, Table, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../styles/item.scss';

const ItemCard = props => {
    
    return (

        // <Card as={Link} to={props.to} >
        //     <Image  wrapped />
        //     <Card.Content>
        //         <Card.Header>
        //             Dishes    
        //         </Card.Header>
        //         <Card.Description>
        //             Dish Number: {props._id}
        //         </Card.Description>
        //         <Card.Description>
        //             Dish Name: {props.productName}
        //         </Card.Description>
        //         <Card.Description>
        //             Dish Price: {props.price}
        //         </Card.Description>
        //         <Card.Description>
        //             Dish Information: {props.productInfo}
        //         </Card.DescriptioName</Table.HeaderCell>
        //     <Table.HeaderCell>Efficacy</Table.HeaderCell>
        //     <Table.HeaderCell>Consn>
        // //         <Card.Description>
        // //             Dish Category: {props.category}
        // //         </Card.Description>
        // //     </Card.Content>
        // </Card>
        // <Table celled padded className="item-table-card">
        /* <Table.Header>
        <Table.Row>
            <Table.HeaderCell singleLine>Dish Number</Table.HeaderCell>
            <Table.HeaderCell>Dish Name</Table.HeaderCell>
            <Table.HeaderCell>Dish Price</Table.HeaderCell>
            <Table.HeaderCell>Dish Category</Table.HeaderCell>
            <Table.HeaderCell>Dish Information</Table.HeaderCell>
        </Table.Row>
        </Table.Header> */
    
        // <Table.Body className="item-table-body" >
          <Table.Row  className="item-table-row"  >

            <Table.Cell className="item-table-cell">{props.productName}</Table.Cell>
            <Table.Cell>
                {props.price}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
            {props.category}
               
            </Table.Cell>
            <Table.Cell className="item-table-cell">
            {props.productInfo}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              <Button as={Link} to={props.to}> More</Button>
            </Table.Cell>
          </Table.Row>
          
        // </Table.Body>
      // </Table>     
        
    );    
};

export default ItemCard;