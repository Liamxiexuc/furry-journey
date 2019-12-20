import React from "react";
//import { Redirect } from "react-router-dom";

import Basket from "../items/components/Basket";
import { fetchUserId } from "../../utils/authentication";
import { getCart } from "../../utils/shoppingCart";
import { addToCart } from "../../utils/shoppingCart";
import { Header } from "semantic-ui-react";
import CheckForm from "./components/CheckForm";
import { sendOrder } from "../../utils/api/order";
import { AFTER_CHECKOUT_URL } from "../../routes/URLMap";
import { toDecimal2 } from "../../utils/shoppingCart";
import "./styles/CheckOut.scss";

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      userId: "",
      shopCartItems: [],
      orderTotalPrice: 0,
      name: "",
      number: "",
      address: "",
      comment: "",
      isPay: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      this.loadingBasket();
    });
  }

  loadingBasket = () => {
    const userId = fetchUserId();

    this.setState({ userId });
    const userShopCart = getCart(userId);
    if (userShopCart !== null) {
      this.setState({ shopCartItems: userShopCart }, () => {
        let orderTotalPrice = 0;
        this.state.shopCartItems.forEach(item => {
          const itemTotalPrice = item.itemPrice * item.quantity;
          orderTotalPrice = orderTotalPrice + itemTotalPrice;
        });
        this.setState({ orderTotalPrice, isLoading: false });
      });
    }
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

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handlePay = () => this.setState({ isPay: true });

  handleCancel = () => this.setState({ isPay: false });

  handleConfirm = () => {
    this.setState({ isLoading: true }, () => {
      const orderStatus = "processing";
      const payStatus = "paid";
      const orderTotalPrice = toDecimal2(this.state.orderTotalPrice);
      const receiverAddress = this.state.address;
      const receiverName = this.state.name;
      const receiverPhone = this.state.number;
      const userId = this.state.userId;
      const comment = this.state.comment;
      // change object's key name in object array
      const transItems = JSON.parse(
        JSON.stringify(this.state.shopCartItems).replace(/productId/g, "dishID")
      );
      const dishes = JSON.parse(
        JSON.stringify(transItems).replace(/itemPrice/g, "price")
      );

      sendOrder(
        orderStatus,
        orderTotalPrice,
        payStatus,
        receiverAddress,
        receiverName,
        receiverPhone,
        userId,
        comment,
        dishes
      )
        .then(this.setState({ isLoading: false }))
        .then(this.props.history.replace(AFTER_CHECKOUT_URL))
        .catch(error => this.setState({ error, isLoading: false }));
    });
  };

  render() {
    return (
      <div className="menu-body-container">
        <div className="body-left">
          <div className="pay-form-container">
            <div className="pay-form-header">
              <Header as="h1" textAlign="center" dividing>
                CHECKOUT
              </Header>
            </div>
            <div className="pay-form-body">
              <CheckForm
                error={this.state.error}
                isLoading={this.state.isLoading}
                name={this.state.name}
                number={this.state.number}
                address={this.state.address}
                comment={this.state.comment}
                handleChange={this.handleChange}
                isPay={this.state.isPay}
                handlePay={this.handlePay}
                handleCancel={this.handleCancel}
                handleConfirm={this.handleConfirm}
              />
            </div>
          </div>
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

export default CheckOut;
