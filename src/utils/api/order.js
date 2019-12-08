import queryString from 'querystring';
import { del, get, post, put} from './axios';


const API_ORDER_URL = '/orders';
const getApiOrderUrlWithId = id => `${API_ORDER_URL}/${id}`;

export const fetchOrders = (pageNum = 1, pageSize = 10, query) => {
    const stringfield = queryString.stringify({
        pageSize,
        query,
        page: pageNum,
    });
    const url = `${API_ORDER_URL}?${stringfield}`;

    return get(url).then(res => ({
        orders: res.data.data.map(order => ({ ...order,  })),
        pagination: res.data.pagination,
    }));
};


export const fetchOrderById = id => {
    const url = getApiOrderUrlWithId(id);
    return get(url).then(res => ({...res.data.data}));
};

export const saveOrderById = (id, order) => {
    const url = getApiOrderUrlWithId(id);
    return put(url, order);
}

export const createOrder = order => {
    return post(API_ITEM_URL, order).then(res => res.data.data);
}

export const deleteOrderById = id => {
    const url = getApiItemUrlWithId(id);
    return del(url);
};

export const addItemToOrder = (itemId, orderId) => {
    const url = `${API_ORDER_URL}/${itemId}/orders/${orderId}`;
    return post(url).then(res => res.data);
};

export const removeItemToOrder = (itemId, orderId) => {
    const url = `${API_ORDER_URL}/${itemId}/orders/${orderId}`;
    return del(url).then(res => res.data);
};

