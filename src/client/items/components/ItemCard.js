import React from "react";
import { withRouter } from 'react-router-dom';
import { Card, Icon } from "semantic-ui-react";

const ItemCard = props => {
   const { history } = props;
  // history.push('/home');

const extra = (
  <a>
    <Icon name="thumbs up" />
    16 Likes
  </a>
);

  return (
    <div className="item-card">
      <Card
        image={"photo-pizzaA.jpg"}
        header="Pizza"
        meta="Veg"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={extra}
      />
    </div>
  );
};


export default withRouter(ItemCard);
