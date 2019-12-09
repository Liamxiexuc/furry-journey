import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/topNav.scss';

const TopNav = () => {
    return (
        <div>
            <NavLink to="/" activeClassName="top-nav--active" > Menu </NavLink>
            <NavLink to="/items" activeClassName="top-nav--active"> All Dishes </NavLink>
            <NavLink to="/items/new" activeClassName="top-nav--active"> New Dish </NavLink>
            
            <NavLink to="/orders" activeClassName="top-nav--active" > All Orders </NavLink>
            <NavLink to="/orders/new" activeClassName="top-nav--active" > New Order </NavLink>
        </div>
    )

};

export default TopNav;