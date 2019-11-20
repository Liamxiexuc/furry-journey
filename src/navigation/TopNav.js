import React from 'react';
import { Link } from 'react-router-dom';


const TopNav = () => {
    return (
        <div>
            <Link to="/manager/items">Menu</Link>
            <Link to="/manager/orders">Orders</Link>
        </div>
    )

};

export default TopNav;