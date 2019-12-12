import React from 'react';
import '../styles/Basket.scss';
import { Button, Icon } from "semantic-ui-react";


class Basket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalPrice: 0,
            error: null
        };
    }

    render() {
        return (
          <div className="basket-container">
            <div className="basket-header">
              <h2>Order Details</h2>
            </div>
            <div className="basket-body">
              <div className="basket-body-item">
                <p>Your order is currently empty.</p>
              </div>
              <div className="basket-body-total">
                <span>TOTAL</span>
                <span>$31.89</span>
              </div>
            </div>
            <div className="basket-footer">
              <div className="basket-navigation">
                <Button
                  labelPosition="right"
                  icon="caret right"
                  content="Forward"
                  positive
                  size="huge"
                  compact
                  fluid
                />
              </div>
              <div className="basket-checkout-container">
                <Button basic color="blue" size="huge" fluid compact>
                  <Icon name="payment" />
                  Finish and Pay
                  <Icon name="caret right" />
                </Button>
              </div>
            </div>
          </div>
        );
    }
}

export default Basket;