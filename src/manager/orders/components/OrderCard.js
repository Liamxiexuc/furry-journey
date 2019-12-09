import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const OrderCard = props => {
    
    return (
        <Card as={Link} to={props.to} >
            <Image  />
            <Card.Content>
                <Card.Header>
                    Client Name: {props.receiverName}
                </Card.Header>
                <Card.Header>
                    Order Number: {props.id}
                </Card.Header>
                <Card.Description>
                    Phone Number: {props.receiverPhone}
                </Card.Description>
                <Card.Description>
                    Address: {props.receiverAddress}
                </Card.Description>
                <Card.Description>
                    Order Status: {props.orderStatus}
                </Card.Description>
                <Card.Description>
                    Total Price: {props.totalPrice}
                </Card.Description>
                <Card.Description>
                    Pay Status: {props.payStatus}
                </Card.Description>
                <Card.Description>
                    Comment: {props.orderComment}
                </Card.Description>
            </Card.Content>
        </Card>

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

export default OrderCard;