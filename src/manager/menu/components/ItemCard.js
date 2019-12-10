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
                    Dish Name: {props.productName}
                </Card.Description>
                <Card.Description>
                    Dish Price: {props.price}
                </Card.Description>
                <Card.Description>
                    Dish Type: {props.productType}
                </Card.Description>
                <Card.Description>
                    Dish Information: {props.productInfo}
                </Card.Description>
                <Card.Description>
                    Dish Category: {props.category}
                </Card.Description>
            </Card.Content>
        </Card>
        
        // <div className="card">
        //     <img src={avatar} />
        //     <div className="container">
        //         <div className="header">
        //             <h4><b>{props.itemName}</b></h4>
        //         </div>
        //         <div className="body">
        //             <div>{props.description}</div>
        //         </div>
                
                
        //         <p>
        //             <Link to={`/items/detail/${item.id}`}>Details</Link>
        //         </p>
        //     </div>
        // </div>
        
    );    
};

export default ItemCard;