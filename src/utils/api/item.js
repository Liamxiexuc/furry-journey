import queryString from 'querystring'
import { del, get, put, post } from "./axios"

const API_ITEM_URL = '/items';

export const fetchItems = () => {
    return get(API_ITEM_URL).then(res => ({
        items: res.data.data.map(item => ({ ...item, image: mockImage }))
    }));
};

export const fetchItemsById = itemId => {
    return get(`${API_ITEM_URL}/${itemId}}`).then(res => ({
        ...res.data.data,

    }));
};

export const createItem = item => {
    return post(API_ITEM_URL, item).then(res => res.data.data);
}

export const deleteItemById = id => {
    const url = getApiItemUrlWithId(id);
    return del(url);
};