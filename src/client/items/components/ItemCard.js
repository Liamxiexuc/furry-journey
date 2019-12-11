import React from "react";
import { withRouter } from 'react-router-dom';
import { Card, Icon, Button } from "semantic-ui-react";

const ItemCard = props => {
   const { history } = props;
  // history.push('/home');

const extra = (

    <Button fluid color="red">Select</Button>

);

  return (
    <div className="item-card">
      <Card
        image={"photo-pizzaA.jpg"}
        header="Pizza"
        meta="$13.89"
        description="Elliot is a sound engineer living in Nashville."
        extra={extra}
      />
    </div>
  );
};


export default withRouter(ItemCard);
