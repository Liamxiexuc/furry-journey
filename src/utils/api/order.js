import queryString from 'querystring';
import { del, get, post} from './axios';


const API_ORDER_URL = '/orders';

export const fetchOrders = (pageNum = 1, pageSize = 10, query) => {
    const stringfield = queryString.stringify({
        pageSize,
        query,
        page: pageNum,
    });
    const url = `${API_ORDER_URL}?${stringfield}`;

    return get(url).then(res => ({
        items: res.data.data.map(items => ({ ...item,  })),
        pagination: res.data.pagination,
    }));
};

export const addItemToOrder = (itemId, orderId) => {
    const url = `${API_ORDER_URL}/${itemId}/orders/${orderId}`;
    return post(url).then(res => res.data);
};

export const removeItemToOrder = (itemId, orderId) => {
    const url = `${API_ORDER_URL}/${itemId}/orders/${orderId}`;
    return del(url).then(res => res.data);
};