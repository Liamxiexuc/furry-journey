import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ItemCard = props => {
  const { history, itemName, itemPrice, itemInfo, to } = props;
  // history.push('/home');

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
