import React from "react";
import "../styles/Basket.scss";
import { Button, Icon } from "semantic-ui-react";
import OrderItemsRow from "./OrderItemsRow";
import { toDecimal2 } from "../../../utils/shoppingCart";

const Basket = props => {
  const { shopCartItems, handleRemove, orderTotalPrice } = props;
  const displayTotalPrice = toDecimal2(orderTotalPrice);


  return (
    <div className="basket-container">
      <div className="basket-header">
        <h2>Order Details</h2>
      </div>
      <div className="basket-body">
        {shopCartItems.length === 0 ? (
          <div className="basket-body-item">
            <p>Your order is currently empty.</p>
          </div>
        ) : (
          shopCartItems.map(item => (
            <OrderItemsRow
              productId={item.productId}
              productName={item.productName}
              itemPrice={item.itemPrice}
              quantity={item.quantity}
              key={item.productId}
              handleRemove={handleRemove}
            />
          ))
        )}
        <div className="basket-body-total">
          <span>TOTAL</span>
          <span>{`$${displayTotalPrice}`}</span>
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
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
