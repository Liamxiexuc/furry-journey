import queryString from 'querystring'
import { del, get, put, post } from "./axios"

const API_USER_URL = '/users';
const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';
const getApiUserUrlWithId = id => `${API_USER_URL}/${id}`;

export const fetchUsers = (query) => {
    // const stringfield = queryString.stringify({
         
    //     query,
        
    // });
    const url = `${API_USER_URL}`;

    return get(url).then(res => ({
        users: res.data.data.map(user => ({ ...user, image: mockImage })),
        // pagination: res.data.pagination,
    }));
};

export const fetchUserById = userId => {
    return get(`${API_USER_URL}/${userId}}`).then(res => ({
        ...res.data.data,

    }));
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

export const addUserToOrder = (userId, orderId) => {
    const url = `${API_USER_URL}/${userId}/orders/${orderId}`;
    return post(url).then(res => res.data);
};

export const removeUserToOrder = (userId, orderId) => {
    const url = `${API_USER_URL}/${userId}/orders/${orderId}`;
    return del(url).then(res => res.data);
};