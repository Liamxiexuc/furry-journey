import React from "react";
import FlexContainer from "../../../UI/flexContainer/FlexContainer";
import { Table } from "semantic-ui-react";


const DishRow = props => {
    const { dishID, productName, price, quantity } = props;
    const singleItemPrice = price * quantity;
  return (
    <FlexContainer justifyContentValue="space-between">
        <p>{dishID} </p>
        <p><b>{productName} </b></p>
        <p>{quantity} </p>
        <p>{`$${singleItemPrice}`} </p>
    </FlexContainer>
  );
};

export default DishRow;