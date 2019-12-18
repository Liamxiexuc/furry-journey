import React, { useState, useEffect } from "react";
import FlexContainer from "../../../../UI/flexContainer/FlexContainer";
import { Table, Button, List } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
// import {ORDER_BASE_URL} from '../../../../route/URLMap';

// import {addItemToOrder} from '../../../../utils/api/order';
// import {removeItemToOrder } from '../../../../utils/api/order';

import '../../styles/dish_row.scss';

const DishDetail = props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { 
      dishes = [],
      dishID, 
      productName, 
      price, 
      quantity,
      location: {pathname: currentPath},
      reloadPage,
      setErrorState 
    } = props;

    const singleItemPrice = price * quantity;



  return (
    <FlexContainer justifyContentValue="space-between">
        <Table className="order-dish-table">
          <Table.Header className="order-dish-table-header" >
            <Table.Row className="order-dish-table-header-row">
              <Table.HeaderCell className="order-item-label">
              Dish ID
              </Table.HeaderCell>
              <Table.HeaderCell className="order-item-label">
              Product Name
              </Table.HeaderCell>
              <Table.HeaderCell className="order-item-label">
              Quantity 
              </Table.HeaderCell>
              <Table.HeaderCell className="order-item-label">
              Item Price
              </Table.HeaderCell>
              <Table.HeaderCell className="order-item-label">
              More
              </Table.HeaderCell>
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
              <Table.Cell className="order-item-content">
                <Button as={Link} to={`${currentPath}/edit`}>
                    Edit
                </Button>
                <Button loading={isDeleting} >
                    Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </FlexContainer>
  )
};

export default withRouter(DishDetail);