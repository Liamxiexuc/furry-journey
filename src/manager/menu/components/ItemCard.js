import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const ItemCard = props => {
    
    return (

        <Card as={Link} to={props.to} >
            <Image  wrapped />
            <Card.Content>
                <Card.Header>
                    Dishes    
                </Card.Header>
                <Card.Description>
                    Dish Number: {props._id}
                </Card.Description>
                <Card.Description>
                    Dish Name: {props.productName}
                </Card.Description>
                <Card.Description>
                    Dish Price: {props.price}
                </Card.Description>
                <Card.Description>
                    Dish Information: {props.productInfo}
                </Card.Description>
                <Card.Description>
                    Dish Category: {props.category}
                </Card.Description>
            </Card.Content>
        </Card>
     
        
    );    
};

export default ItemCard;