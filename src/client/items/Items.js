import React from "react";
import { fetchItems } from "../../utils/api/item";
import { ERROR_URL } from "../../routes/URLMap";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
import { getCart } from "../../utils/shoppingCart";
import { fetchUserId } from "../../utils/authentication";
import { addToCart } from "../../utils/shoppingCart";

import "./styles/items.scss";

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false,
      error: null,
      shopCartItems: [],
      orderTotalPrice: 0
    };
  }

  componentDidMount() {
    this.loadingItems();
    this.loadingBasket();
  }

  loadingItems = () => {
    this.setState({ isLoading: true }, () => {
      fetchItems()
        .then(itemData => {
          this.setState({
            isLoading: false,
            items: itemData.data
          });
        })
        .catch(error =>
          this.setState({ error, isLoading: false }, () => {
            this.props.history.push({
              pathname: ERROR_URL,
              state: { error: this.state.error }
            });
          })
        );
    });
  };

  loadingBasket = () => {
    const userId = fetchUserId();
    if (userId === null) {
      return;
    }
    const userShopCart = getCart(userId);
    if (userShopCart !== null) {
      this.setState({ shopCartItems: userShopCart }, () => {
        let orderTotalPrice = 0;
        this.state.shopCartItems.forEach(item => {
          const itemTotalPrice = item.itemPrice * item.quantity;
          orderTotalPrice = orderTotalPrice + itemTotalPrice;
        });
        this.setState({ orderTotalPrice });
      });
    }
  };

  handleRemove = itemId => {
    const userId = fetchUserId();
    const userShopCart = getCart(userId);
    userShopCart.splice(
      userShopCart.findIndex(item => item.productId === this.itemID),
      1
    );
    addToCart(userId, userShopCart);
    this.setState({ shopCartItems: userShopCart }, () => {
        let orderTotalPrice = 0;
        this.state.shopCartItems.forEach(item => {
          const itemTotalPrice = item.itemPrice * item.quantity;
          orderTotalPrice = orderTotalPrice + itemTotalPrice;
        });
        this.setState({ orderTotalPrice })});
  };

  render() {
    return (
      <div className="menu-body-container">
        <div className="body-left">
          <Menu items={this.state.items} />
        </div>
        <div className="body-right">
          <div className="body-right-sticky">
            <Basket
              shopCartItems={this.state.shopCartItems}
              handleRemove={this.handleRemove}
              orderTotalPrice={this.state.orderTotalPrice}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Items;

/*   {
              this.state.items.map(item => (
                <ItemCard
                  
                  itemName={item.name}
                  itemDescription={item.description}
                />
              ));
            } */
