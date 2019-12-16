import { get, put } from "./axios";

const API_USER_URL = "./users";

export const fetchUser = userId => {
  return get(`${API_USER_URL}/${userId}`);
};

export const saveUserInfo = (
  userId,
  title,
  firstName,
  lastName,
  gender,
  phone,
  birthDay,
  address
) => {
  const data = {
    title,
    firstName,
    lastName,
    gender,
    phone,
    birthDay,
    address
  };

  return put(`${API_USER_URL}/${userId}`, data);
};

export const fetchAllOrdersByUserId = userId => {
  return get(`${API_USER_URL}/${userId}/orders`);
};
