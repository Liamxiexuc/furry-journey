import React from "react";
import { withRouter } from 'react-router-dom';
import { Card, Icon } from "semantic-ui-react";
import { pic } from '../wood-fired-oven.jpg'; 

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
        image={pic}
        header="Pizza"
        meta="Veg"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={extra}
      />
    </div>
  );
};


export default withRouter(ItemCard);