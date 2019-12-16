import React from 'react';
import OrderItemCell from "./OrderItemCell";

const OrderRow = props => {
    const {
      orderId,
      orderItems,
      orderTotalPrice,
      orderStatus,
      payStatus,
      receiverName,
      receiverPhone,
      receiverAddress,
      orderTime,
      comment
    } = props;

    const day = orderTime.substr(0, 10);
    const time = orderTime.substr(11, 8);
    
    return (
      <tr className="orders-table-tr">
        <td className="orders-col-id">{orderId}</td>
        <td className="orders-col-items">
          {orderItems.map(orderItem => (
            <OrderItemCell
              productName={orderItem.productName}
              price={orderItem.price}
              quantity={orderItem.quantity}
            />
          ))}
        </td>
        <td className="orders-col-price">
          <b>{`$${orderTotalPrice}`}</b>
        </td>
        <td className="orders-col-status">{orderStatus}</td>
        <td className="orders-col-pay">{payStatus}</td>
        <td className="orders-col-delivery">
          {receiverName}
          <br />
          {receiverPhone}
          <br />
          {receiverAddress}
        </td>
        <td className="orders-col-time">
          {day}
          <br />
          {time}
        </td>
        <td className="orders-col-comment">{comment}</td>
      </tr>
    );
}

export default OrderRow;
