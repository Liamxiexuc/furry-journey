import React from "react";
import FlexContainer from "../../../../UI/flexContainer/FlexContainer";
import { Table} from "semantic-ui-react";
import { withRouter } from 'react-router';
import '../../styles/dish_row.scss';

const DishRow = props => {
    const { 
      price, 
      quantity,
 
 
    } = props;

  return (
    <FlexContainer justifyContentValue="space-between">
        <Table className="order-dish-table">
          <Table.Header className="order-dish-table-header" >
            <Table.Row className="order-dish-table-header-row">
            </Table.Row>
          </Table.Header>
          <Table.Body className="order-dish-table-body">
            <Table.Row className="order-dish-table-body-row">
              <Table.Cell className="order-item-content">
              { props.dishID}
              </Table.Cell>
              <Table.Cell className="order-item-content">
              {props.productName}
              </Table.Cell>
              <Table.Cell className="order-item-content">
              {props.quantity}
              </Table.Cell>
              <Table.Cell className="order-item-content">
              {price * quantity}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </FlexContainer>
  )
};

export default withRouter(DishRow);