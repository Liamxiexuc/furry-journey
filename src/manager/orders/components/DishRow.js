import React from "react";
import FlexContainer from "../../../UI/flexContainer/FlexContainer";
import { Table, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom';

const DishRow = props => {
    const { dishID, productName, price, quantity } = props;
    const singleItemPrice = price * quantity;
  return (
    <FlexContainer justifyContentValue="space-between">
      
        <Table.Row >
          <Table.Cell >
          Dish ID: { dishID}
          </Table.Cell>
          <Table.Cell >
          Product Name: {productName}
          </Table.Cell>
          <Table.Cell >
          Quantity: {quantity}
          </Table.Cell>
          <Table.Cell >
          Item Price: {`$${singleItemPrice}`}
          </Table.Cell>
          
        </Table.Row>
    </FlexContainer>
  );
};

export default DishRow;