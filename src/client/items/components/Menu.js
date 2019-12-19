import React from "react";
import ItemCard from "./ItemCard";
import "../styles/items.scss";

import {ITEM_CLIENT_BASE_URL} from "../../../routes/URLMap";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      isLoading: false,
      error: null
    };
  }

  itemFilter = (items, filter) => {
    const result = [];
    items.map(item => {
      if (item.category === filter) {
        result.push(item);
      }
    });
    return result;
  };

  render() {
    const allItems = this.props.items;
    const pizzas = this.itemFilter(allItems, "pizza");
    const sides = this.itemFilter(allItems, "sides");
    const drinks = this.itemFilter(allItems, "drinks");

    return (
      <React.Fragment>
        <div className="body-left-block">
          <h1>Favorites</h1>
          <div className="body-item-container">
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
        <div className="body-left-block">
          <h1>Premium Pizzas</h1>
          <div className="body-item-container">
            {pizzas.map(item => (
              <ItemCard
                itemName={item.productName}
                itemPrice={item.price}
                itemInfo={item.productInfo}
                key={item._id}
                to={`${ITEM_CLIENT_BASE_URL}/${item._id}`}
              />
            ))}
          </div>
        </div>
        <div className="body-left-block">
          <h1>Drinks</h1>
          <div className="body-item-container">
            {drinks.map(item => (
              <ItemCard
                itemName={item.productName}
                itemPrice={item.price}
                itemInfo={item.productInfo}
                key={item._id}
                to={`${ITEM_CLIENT_BASE_URL}/${item._id}`}
              />
            ))}
          </div>
        </div>
        <div className="body-left-block">
          <h1>Sides</h1>
          <div className="body-item-container">
            {sides.map(item => (
              <ItemCard
                itemName={item.productName}
                itemPrice={item.price}
                itemInfo={item.productInfo}
                key={item._id}
                to={`${ITEM_CLIENT_BASE_URL}/${item._id}`}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
