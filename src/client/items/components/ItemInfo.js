import React from "react";
import { withRouter } from "react-router";
import "../styles/ItemInfo.scss";
import PizzaA from "../../../assets/photo-pizzaA.jpg";

const ItemInfo = props => {
  const {
    itemName,
    itemPrice,
    itemInfo,
    addToOrder,
    quantity,
    handleQuantityChange,
  } = props;

  return (
    <React.Fragment>
      <div className="itemtitle">
        <h1>{itemName}</h1>
        <h1>{`$${itemPrice}`}</h1>
      </div>
      <div className="item">
        <div className="item-image-container">
          <img className="item-image" src={PizzaA} alt="PizzaA" />
        </div>
        <div className="item-details-container">
          <h4>DESCRIPTION</h4>
          <div className="item-details-description">
            <p>{itemInfo}</p>
          </div>
          <div className="item-details-input">
            <label>QTY</label>
            <div className="input-row">
              <div className="input-field">
                <input
                  name="quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
              </div>
              <div className="input-button">
                <button onClick={addToOrder}>Add To Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ItemInfo);
