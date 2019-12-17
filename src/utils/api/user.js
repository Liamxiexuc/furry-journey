import queryString from 'querystring'
import { del, get, put, post } from "./axios"

const API_USER_URL = '/users';
const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';
const getApiUserUrlWithId = id => `${API_USER_URL}/${id}`;

export const fetchUsers = (query) => {
    return get(API_USER_URL);
};

export const fetchUserById = id => {
    const url = getApiUserUrlWithId(id);
    return get(url).then(res => (
        console.log(res.data),
        {... res.data}
    ));
 
};

export const saveUserById = (id, user) => {
    const url = getApiUserUrlWithId(id);
    return put(url, user);
};

export const createUser = user => {
    return post(API_USER_URL, user).then(res => res.data.data);
}

export const deleteUserById = id => {
    const url = getApiUserUrlWithId(id);
    return del(url);
};

// export const addUserToOrder = (id, orderId) => {
//     const url = `${API_USER_URL}/${id}/orders/${orderId}`;
//     return post(url).then(res => res.data);
// };

// export const removeUserToOrder = (id, orderId) => {
//     const url = `${API_USER_URL}/${id}/orders/${orderId}`;
//     return del(url).then(res => res.data);
// };