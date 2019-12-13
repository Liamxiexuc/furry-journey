import React from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {
    ORDER_BASE_URL,
    ITEM_BASE_URL,
    USER_BASE_URL,
    LOGIN_URL,
} from '../route/URLMap';
import { isLoggedIn, removeToken } from '../utils/authentication';

import './styles/topNav.scss';

const TopNav = () => {
    return (
        <div>
            {/* <NavLink to="/" activeClassName="top-nav--active" > Menu </NavLink> */}
            <NavLink to={ITEM_BASE_URL} activeClassName="top-nav--active"> Dishes </NavLink>
            {/* <NavLink to="/items/new" activeClassName="top-nav--active"> New Dish </NavLink> */}
            
            <NavLink to={ORDER_BASE_URL} activeClassName="top-nav--active" > Orders </NavLink>
            {/* <NavLink to="/orders/new" activeClassName="top-nav--active" > New Order </NavLink> */}

            <NavLink to={USER_BASE_URL} activeClassName="top-nav--active" > Users </NavLink>
        
            <NavLink to={LOGIN_URL} activeClassName="top-nav--active" > Login </NavLink>
        </div>
    )

};

export default TopNav;