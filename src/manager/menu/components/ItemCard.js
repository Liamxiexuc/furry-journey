import React from 'react';
import {Link} from 'react-router-dom';



const ItemCard = props => {
    return (
        // <Card as={Link} to={props.to} className="item-card">
        //     <Image src={props.itemImage} wrapped />
        //     <Card.Content>
        //         <Card.Header>
        //             {props.itemName}
        //         </Card.Header>
        //         <Card.Description>
        //             {props.itemDescription}
        //         </Card.Description>
        //     </Card.Content>
        // </Card>
        <div>
            <div className="card">
                <img src={avatar} />
                <div className="container">
                    <h4><b>{props.itemName}</b></h4>
                    <div>{props.description}</div>
                    <p>
                        <Link to={`/items/detail/${item.id}`}>Details</Link>
                    </p>
                </div>
            </div>
        </div>
    );    
};

export default ItemCard;