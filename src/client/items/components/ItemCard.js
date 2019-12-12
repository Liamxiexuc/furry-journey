import React from "react";
import { withRouter } from 'react-router-dom';
import { Card, Icon, Button } from "semantic-ui-react";

const ItemCard = props => {
   const { history, itemName, itemPrice, itemInfo } = props;
  // history.push('/home');

const extra = (
    <Button fluid color="red">Select</Button>
);

  return (
    <div className="item-card">
      <Card
        image={"photo-pizzaA.jpg"}
        header={itemName}
        meta={`$ ${itemPrice}`}
        description={itemInfo}
        extra={extra}
      />
    </div>
  );
};


export default withRouter(ItemCard);
