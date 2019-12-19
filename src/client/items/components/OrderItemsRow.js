import React from "react";
import { withRouter } from "react-router";
import { toDecimal2 } from "../../../utils/shoppingCart";
import { ITEM_CLIENT_BASE_URL } from "../../../routes/URLMap.js";

const OrderItemsRow = props => {
  const { productId, productName, itemPrice, quantity, handleRemove } = props;
  const price = itemPrice * quantity;
  // format display price 
  const displayPrice = toDecimal2(price);

  return (
    <React.Fragment>
      <div className="basket-items-area">
        <div className="basket-items-row">
          <div className="basket-items-info">
            <span>{`${quantity} X ${productName}`}</span>
          </div>
          <div className="basket-items-price">
            <span>{`$${displayPrice}`}</span>
          </div>
        </div>
        <div className="basket-actions-row">
          <button
            onClick={() => handleRemove(productId)}
            className="basket-remove-btn"
          >
            REMOVE
          </button>
          <a href={`${ITEM_CLIENT_BASE_URL}/${productId}`}>
            <button
              className="basket-edit-btn"
            >
              EDIT
            </button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(OrderItemsRow);
