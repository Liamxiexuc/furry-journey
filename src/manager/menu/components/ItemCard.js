import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const ItemCard = props => {
    
    return (
        <Card as={Link} to={props.to} className="item-card">
            <Image src={props.photo} wrapped />
            <Card.Content>
                <Card.Header>
                    {props.productName}
                </Card.Header>
                <Card.Description>
                    {props.price}
                </Card.Description>
                <Card.Description>
                    {productType}
                </Card.Description>
                <Card.Description>
                    {productInfo}
                </Card.Description>
                <Card.Description>
                    {category}
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