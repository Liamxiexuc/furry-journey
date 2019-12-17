import React from 'react';
import { Card, Image, Table, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import DishRow from "./DishRow";

const OrderRow = props => {
    
    return (
        // <Card as={Link} to={props.to} >
        //     <Image  />
        //     <Card.Content>
        //         <Card.Header>
        //             Client Name: {props.receiverName}
        //         </Card.Header>
        //         <Card.Header>
        //             Order Number: {props.id}
        //         </Card.Header>
        //         <Card.Description>
        //             Phone Number: {props.receiverPhone}
        //         </Card.Description>
        //         <Card.Description>
        //             Address: {props.receiverAddress}
        //         </Card.Description>
        //         <Card.Description>
        //             Order Status: {props.orderStatus}
        //         </Card.Description>
        //         <Card.Description>
        //             Total Price: {props.totalPrice}
        //         </Card.Description>
        //         <Card.Description>
        //             Pay Status: {props.payStatus}
        //         </Card.Description>
        //         <Card.Description>
        //             Comment: {props.orderComment}
        //         </Card.Description>
        //     </Card.Content>
        // </Card>

        <Table.Row  className="item-table-row"  >
            <Table.Cell className="item-table-cell">
              {props.id}
            </Table.Cell>      
            <Table.Cell className="item-table-cell">
              {props.orderStatus}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.createdAt}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.orderTotalPrice}
            </Table.Cell>

            <Table.Cell className="item-table-cell">
              {props.payStatus}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.userId}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.receiverName}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.receiverPhone}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.receiverAddress}  
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.comment}
            </Table.Cell>
            <Table.Cell >
              {props.dishes.map(dish => (
                <DishRow
                productName={dish.productName}
                price={dish.price}
                quantity={dish.quantity}
                  />
              ))}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                <Button as={Link} to={props.to}> More</Button>
            </Table.Cell>
          </Table.Row>
        // <div className="order-card">
        //     <div className="order-card--header">
        //         <div className="order-receiver-name">
        //             Client Name: {props.receiverName}
        //         </div>
        //         <div className="order-receiver-phone">
        //             Phone Number: {props.receiverPhone}
        //         </div>
        //         <div className="order-receiver-address">
        //             Address: {props.receiverAddress}
        //         </div>
        //     </div>
        //     <div className="order-card--body">
        //         <div className="order-status">
        //             Order Status: {props.orderStatus}
        //         </div>
        //         <div className="order-total-price">
        //             Total Price: {props.totalPrice}
        //         </div>
        //         <div className="order-pay-status">
        //             Pay Status: {props.payStatus}
        //         </div>
        //     </div>
        //     <div className="order-card-footer">
        //         <div className="order-comment">
        //             Comment: {props.orderComment}
        //         </div>
        //     </div>
        // </div>
    )    
};

export default OrderRow;