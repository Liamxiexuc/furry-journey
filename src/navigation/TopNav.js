import React from 'react';
import { NavLink } from 'react-router-dom';


const TopNav = () => {
    return (
        <div>
            <NavLink to="/manager/menu" activeClassName="top-nav--active" >Menu</NavLink>
            <NavLink to="/manager/orders" activeClassName="top-nav--active" >Orders</NavLink>
        </div>
    )

};

export default TopNav;