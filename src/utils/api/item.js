import { get } from './axios';

const API_ITEM_URL = './dishes';

export const fetchItems = () => {
    return get(API_ITEM_URL);
}