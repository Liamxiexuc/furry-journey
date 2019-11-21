import React from 'react';

const OrderCard = props => {
    return (
        <div className="order-card">
            <div className="order-card--header">
                <div className="order-receiver-name">
                    Client
                </div>
                <div className="order-receiver-phone">
                    040 000 0000
                </div>
                <div className="order-receiver-address">
                    1 Brisbane Street, Brisbane, 4000, QLD
                </div>
            </div>
            <div className="order-card--body">
                <div className="order-status">
                    completed
                </div>
                <div className="order-total-price">
                    14
                </div>
                <div className="order-pay-status">
                    completed
                </div>
            </div>
            <div className="order-card-footer">
                <div className="order-comment">
                    be quick
                </div>
            </div>
        </div>
    )    
};

export default OrderCard;