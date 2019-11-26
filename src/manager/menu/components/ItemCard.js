import React from 'react';

const ItemCard = props => {
    return (
        <Card as={Link} to={props.to} className="item-card">
            <Image src={props.itemImage} wrapped />
            <Card.Content>
                <Card.Header>
                    {props.itemName}
                </Card.Header>
                <Card.Description>
                    {props.itemDescription}
                </Card.Description>
            </Card.Content>
        </Card>
    );    
};

export default ItemCard;