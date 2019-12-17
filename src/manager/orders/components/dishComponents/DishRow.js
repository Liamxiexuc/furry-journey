import React, { useState, useEffect } from "react";
import FlexContainer from "../../../../UI/flexContainer/FlexContainer";
import { Table, Button, List } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {ORDER_BASE_URL} from '../../../../route/URLMap';

import {addItemToOrder} from '../../../../utils/api/order';
import {removeItemToOrder } from '../../../../utils/api/order';

const DishRow = props => {
    const [isDeleting, setIsDeleting] = useState(false);
    const { 
      dishes = [],
      dishID, 
      productName, 
      price, 
      quantity,
 
 
    } = props;

    const singleItemPrice = price * quantity;



  return (
    <FlexContainer justifyContentValue="space-between">
        {/* <List ordered>
          <List.Item>
            Dish ID: { props.dishID}
            <List.List>
            Product Name: {props.productName}
            </List.List>
            <List.List>
            Quantity: {props.quantity}
            </List.List>
            <List.List>
            Item Price: {`$${props.singleItemPrice}`}
            </List.List>
          </List.Item>
        </List> */}
        <Table >
          <Table.Header >
            <Table.Row>
              <Table.HeaderCell>
              Dish ID
              </Table.HeaderCell>
              <Table.HeaderCell>
              Product Name
              </Table.HeaderCell>
              <Table.HeaderCell>
              Quantity 
              </Table.HeaderCell>
              <Table.HeaderCell>
              Item Price
              </Table.HeaderCell>
              <Table.HeaderCell>
              More
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body >
            <Table.Row>
              <Table.Cell>
              { props.dishID}
              </Table.Cell>
              <Table.Cell>
              {props.productName}
              </Table.Cell>
              <Table.Cell>
              {props.quantity}
              </Table.Cell>
              <Table.Cell>
              {price * quantity}
              </Table.Cell>
              <Table.Cell>
                <Button as={Link} to={props.to}>
                    More
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
 

    </FlexContainer>
  )
};

export default withRouter(DishRow);