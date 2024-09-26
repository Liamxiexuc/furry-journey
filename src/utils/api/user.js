import { del, get, put, post } from "./axios";
const API_USER_URL = '/users';
const getApiUserUrlWithId = id => `${API_USER_URL}/${id}`;

export const fetchUsers = () => {
    return get(API_USER_URL);
};

export const fetchUserById = id => {
    const url = getApiUserUrlWithId(id);
    return get(url).then(res => (
        {...res.data}
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

