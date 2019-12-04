import queryString from 'querystring'
import { del, get, put, post } from "./axios"

const API_ITEM_URL = '/items';

export const fetchItems = (pagNum = 1, pageSize = 10, query) => {
    const stringfield = queryString.stringify({
        pageSize,
        query,
        page: pageNum,
    });
    const url = `${API_ITEM_URL}?${stringfield}`;

    return get(url).then(res => ({
        items: res.data.data.map(item => ({ ...item, image: mockImage })),
        pagination: res.data.pagination,
    }));
};

// export const fetchItemsById = itemId => {
//     return get(`${API_ITEM_URL}/${itemId}}`).then(res => ({
//         ...res.data.data,

//     }));
// };

// export const createItem = item => {
//     return post(API_ITEM_URL, item).then(res => res.data.data);
// }

// export const deleteItemById = id => {
//     const url = getApiItemUrlWithId(id);
//     return del(url);
// };

export const addItemToOrder = (itemId, orderId) => {
    const url = `${API_ORDER_URL}/${itemId}/orders/${orderId}`;
    return post(url).then(res => res.data);
};

export const removeItemToOrder = (itemId, orderId) => {
    const url = `${API_ORDER_URL}/${itemId}/orders/${orderId}`;
    return del(url).then(res => res.data);
};