import queryString from 'querystring'
import { del, get, put, post } from "./axios"

const API_ITEM_URL = '/dishes';
const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';
const getApiItemUrlWithId = id => `${API_ITEM_URL}/${id}`;

export const fetchItems = (query) => {

    return get(API_ITEM_URL);
};

export const fetchItemById = id => {
    const url = getApiItemUrlWithId(id);
    return get(url).then(res => (
        console.log(res.data),
        { 
            ...res.data
        }));
 
};

export const saveItemById = (id, item) => {
    const url = getApiItemUrlWithId(id);
    return put(url, item);
};

export const createItem = item => {
    return post(API_ITEM_URL, item).then(res => res.data.data);
}

export const deleteItemById = id => {
    const url = getApiItemUrlWithId(id);
    return del(url);
};

export const addItemToOrder = (id, orderId) => {
    const url = `${API_ITEM_URL}/${id}/orders/${orderId}`;
    return post(url).then(res => res.data);
};

export const removeItemToOrder = (id, orderId) => {
    const url = `${API_ITEM_URL}/${id}/orders/${orderId}`;
    return del(url).then(res => res.data);
};