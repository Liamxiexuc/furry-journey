import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import DishRow from "./dishComponents/DishRow";

const OrderRow = props => {
    
    return (
        <Table.Row  className="item-table-row"  >
            <Table.Cell className="item-table-cell">
              {props.id}
            </Table.Cell>      
            <Table.Cell className="item-table-cell">
              {props.orderStatus}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.createdAt}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.orderTotalPrice}
            </Table.Cell>

            <Table.Cell className="item-table-cell">
              {props.payStatus}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.userId}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.receiverName}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                {props.receiverPhone}
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.receiverAddress}  
            </Table.Cell>
            <Table.Cell className="item-table-cell">
              {props.comment}
            </Table.Cell>
            <Table.Cell className="item-table-order-cell" >
              {props.dishes.map(dish => (
                <DishRow
                dishID={dish.dishID}
                productName={dish.productName}
                price={dish.price}
                quantity={dish.quantity}               
                  />
              ))}
 
            </Table.Cell>
            <Table.Cell className="item-table-cell">
                <Button className="item-more" as={Link} to={props.to}> More</Button>
            </Table.Cell>
          </Table.Row>

    )    
};

export default OrderRow;