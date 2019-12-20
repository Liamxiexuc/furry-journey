import { post } from "./axios";

const API_ORDER_URL = './orders';

export const sendOrder = (
  orderStatus,
  orderTotalPrice,
  payStatus,
  receiverAddress,
  receiverName,
  receiverPhone,
  userId,
  comment,
  dishes
) => {
    const data = {
      orderStatus,
      orderTotalPrice,
      payStatus,
      receiverAddress,
      receiverName,
      receiverPhone,
      userId,
      comment,
      dishes
    };

    return post(API_ORDER_URL, data);
};