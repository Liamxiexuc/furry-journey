import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../styles/item.scss';

const ItemRow = props => {
    
    return (
          <Table.Row  className="item-table-row"  >
              <Table.Cell className="item-table-cell">
              {props.id}
              </Table.Cell>      

              <Table.Cell className="item-table-cell">
              {props.productName}
              </Table.Cell>
              <Table.Cell>
                {props.price}
              </Table.Cell>
              <Table.Cell className="item-table-cell">
              {props.category}
               
              </Table.Cell>
              <Table.Cell className="item-table-cell">
              {props.productInfo}
              </Table.Cell>
              <Table.Cell className="item-table-cell">
                <Button className="item-more" as={Link} to={props.to}>More</Button>
               
              </Table.Cell>
          </Table.Row>
          
        // </Table.Body>
      // </Table>     
        
    );    
};

export default ItemRow;