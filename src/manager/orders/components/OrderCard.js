import React from 'react';

const OrderCard = props => {
    return (
        <div className="order-card">
            <div className="order-card--header">
                <div className="order-receiver-name">
                    Client Name: {props.receiverName}
                </div>
                <div className="order-receiver-phone">
                    Phone Number: {props.receiverPhone}
                </div>
                <div className="order-receiver-address">
                    Address: {props.receiverAddress}
                </div>
            </div>
            <div className="order-card--body">
                <div className="order-status">
                    Order Status: {props.orderStatus}
                </div>
                <div className="order-total-price">
                    Total Price: {props.totalPrice}
                </div>
                <div className="order-pay-status">
                    Pay Status: {props.payStatus}
                </div>
            </div>
            <div className="order-card-footer">
                <div className="order-comment">
                    Comment: {props.orderComment}
                </div>
            </div>
        </div>
    )    
};

export default OrderCard;