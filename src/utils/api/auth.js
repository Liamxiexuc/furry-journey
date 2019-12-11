import { post } from "./axios";

export const login = (email, password) => {
  const url = "/auth";
  const data = {
    email,
    password
  };
  return post(url, data).then(response => response.data.token);
};

export const signup =
  (email,
  password,
  title,
  firstName,
  lastName,
  gender,
  phone,
  birthDay,
  address) => {
    const url = "/users";
    const data = {
      email,
      password,
      title,
      firstName,
      lastName,
      gender,
      phone,
      birthDay,
      address
    };
    return post(url, data).then(response => response.data.token);
  }
