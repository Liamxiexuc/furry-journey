import React from 'react';

const ItemCard = props => {
    return (
        <div className="item-card">
            <div className="item-card--header">
                <div className="item-name">
                    Beef and Bacon pizza
                </div>
                <div className="item-price">
                    15
                </div>
                <div className="item-photo">
                    image
                </div>
            </div>
            <div className="item-card--body">
                <div className="item-type">
                    Classic
                </div>
                <div className="item-info">
                Huge Pie cut into 8 extra-large slices. 
                Authentic soft and foldable New York Style dough 
                topped with garlic sauce, cherry tomatoes, 
                creamy mozzarella and oregano
                </div>
                <div className="item-category">
                    Food
                </div>
            </div>
        </div>
    )    
};

export default ItemCard;