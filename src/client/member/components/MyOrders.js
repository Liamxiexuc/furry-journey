import React, { Component } from "react";
import { Header, Table } from "semantic-ui-react";

import { fetchAllOrdersByUserId } from "../../../utils/api/user";
import { ERROR_URL } from "../../../routes/URLMap";
import FlexContainer from "../../../UI/flexContainer/FlexContainer";
import OrderRow from "./OrderRow";
import '../styles/MyOrders.scss';


class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      error: null
    };
  }

  componentDidMount() {
    this.loadUserOrders();
  }

  loadUserOrders = () => {
    const userId = this.props.userId;
    fetchAllOrdersByUserId(userId)
      .then(userData => {
        this.setState({ orders: userData.data });
      })
      .catch(error =>
        this.setState({ error, isLoading: false }, () => {
          this.props.history.push({
            pathname: ERROR_URL,
            state: { error: this.state.error }
          });
        })
      );
  };

  render() {
    const orders = this.state.orders;
    return (
      <FlexContainer justifyContentValue="center">
        <table className="b-orders-table">
          <thead>
            <tr className="orders-table-th">
              <th className="orders-col-id">Order Id</th>
              <th className="orders-col-items">Order Items</th>
              <th className="orders-col-price">Total Price</th>
              <th className="orders-col-status">Order Status</th>
              <th className="orders-col-pay">Order Status</th>
              <th className="orders-col-delivery">Delivery Info</th>
              <th className="orders-col-time">Order Time</th>
              <th className="orders-col-comment">Comments</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <OrderRow
                key={order._id}
                orderId={order._id}
                orderItems={order.dishes}
                orderTotalPrice={order.orderTotalPrice}
                orderStatus={order.orderStatus}
                payStatus={order.payStatus}
                receiverName={order.receiverName}
                receiverPhone={order.receiverPhone}
                receiverAddress={order.receiverAddress}
                orderTime={order.createdAt}
                comment={order.comment}
              />
            ))}
          </tbody>
        </table>
      </FlexContainer>
    );
  }
}

export default MyOrders;
