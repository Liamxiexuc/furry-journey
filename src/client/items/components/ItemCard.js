import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PizzaA from '../../../assets/photo-pizzaA.jpg';

const ItemCard = props => {
  const { itemName, itemPrice, itemInfo, to } = props;


  const extra = (
    <Button fluid color="red">
      Select
    </Button>
  );

  return (
    <div className="item-card">
      <Card
        as={Link}
        to={to}
        image={PizzaA}
        header={itemName}
        meta={`$ ${itemPrice}`}
        description={itemInfo}
        extra={extra}
      />
    </div>
  );
};

export default withRouter(ItemCard);
