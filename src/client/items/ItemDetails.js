import React from "react";
import Basket from "./components/Basket";
import { fetchItemById } from "../../utils/api/item";
import ItemInfo from "./components/ItemInfo";
import { getCart, addToCart } from "../../utils/shoppingCart";
import { fetchUserId } from "../../utils/authentication";
import "./styles/items.scss";

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      shopCartItems: [],
      isLoading: false,
      error: null,
      quantity: 1,
      orderTotalPrice: 0
    };
  }

  componentDidMount() {
    const itemId = this.props.match.params.id;
    this.setState({ isLoading: true }, () => {
      this.loadingBasket();
      fetchItemById(itemId)
        .then(item => this.setState({ item: item.data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    });
  }

  loadingBasket = () => {
    const userId = fetchUserId();

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

  handleQuantityChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  addToOrder = () => {
    this.setState({ isAdding: true }, () => {
      const userId = fetchUserId();
      const shopItem = {
        productId: this.props.match.params.id,
        productName: this.state.item.productName,
        itemPrice: this.state.item.price,
        quantity: parseInt(this.state.quantity)
      };
      let ShopCart = getCart(userId);

      if (ShopCart === null) {
        // If shopping cart is empty
        let shoppingCart = [];
        shoppingCart.push(shopItem);
        addToCart(userId, shoppingCart);
        this.setState({ shopCartItems: shoppingCart }, () => {
          let orderTotalPrice = 0;
          this.state.shopCartItems.forEach(item => {
            const itemTotalPrice = item.itemPrice * item.quantity;
            orderTotalPrice = orderTotalPrice + itemTotalPrice;
          });
          this.setState({ orderTotalPrice });
        });
      } else {
        // If shopping cart is exist
        const existItem = ShopCart.filter(item => {
          return item.productId === shopItem.productId;
        });
        // if shopping cart doesn't have order item
        if (existItem.length === 0) {
          ShopCart.push(shopItem);
          addToCart(userId, ShopCart);
          this.setState({ shopCartItems: ShopCart }, () => {
            let orderTotalPrice = 0;
            this.state.shopCartItems.forEach(item => {
              const itemTotalPrice = item.itemPrice * item.quantity;
              orderTotalPrice = orderTotalPrice + itemTotalPrice;
            });
            this.setState({ orderTotalPrice });
          });
        } else {
          // if order item already exist in shopping cart
          const updatedShopCart = ShopCart.map(item => {
            if (item.productId === shopItem.productId) {
              item.quantity += shopItem.quantity;
              return item;
            } else {
              return item;
            }
          });
          addToCart(userId, updatedShopCart);
          this.setState({ shopCartItems: updatedShopCart }, () => {
            let orderTotalPrice = 0;
            this.state.shopCartItems.forEach(item => {
              const itemTotalPrice = item.itemPrice * item.quantity;
              orderTotalPrice = orderTotalPrice + itemTotalPrice;
            });
            this.setState({ orderTotalPrice });
          });
        }
      }
    });
  };

  handleRemove = itemId => {
    const userId = fetchUserId();
    const userShopCart = getCart(userId);

    userShopCart.splice(
      userShopCart.findIndex(item => item.productId === itemId),
      1
    );

    addToCart(userId, userShopCart);
    this.setState({ shopCartItems: userShopCart }, () => {
      let orderTotalPrice = 0;
      this.state.shopCartItems.forEach(item => {
        const itemTotalPrice = item.itemPrice * item.quantity;
        orderTotalPrice = orderTotalPrice + itemTotalPrice;
      });
      this.setState({ orderTotalPrice });
    });
  };

  render() {
    return (
      <div className="menu-body-container">
        <div className="body-left">
          <ItemInfo
            itemName={this.state.item.productName}
            itemPrice={this.state.item.price}
            itemInfo={this.state.item.productInfo}
            isAdding={this.state.isAdding}
            addToOrder={this.addToOrder}
            key={this.state.item._id}
            quantity={this.state.quantity}
            handleQuantityChange={this.handleQuantityChange}
          />
        </div>
        <div className="body-right">
          <div className="body-right-sticky">
            <Basket
              shopCartItems={this.state.shopCartItems}
              orderTotalPrice={this.state.orderTotalPrice}
              handleRemove={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
