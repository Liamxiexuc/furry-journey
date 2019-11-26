import { get } from "./axios"

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

export const deleteItemById = itemId => {
    return del(`${API_ITEM_URL}/${itemId}`);
}; 

export const createItem 