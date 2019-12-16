import React from "react";
import FlexContainer from "../../../UI/flexContainer/FlexContainer";
import { Table } from "semantic-ui-react";


const OrderItemCell = props => {
    const { productName, price, quantity } = props;
    const singleItemPrice = price * quantity;
  return (
    <FlexContainer justifyContentValue="space-between">
      <p><b>{productName} </b></p>
      <p>{quantity} </p>
      <p>{`$${singleItemPrice}`} </p>
    </FlexContainer>
  );
};

export default OrderItemCell;
