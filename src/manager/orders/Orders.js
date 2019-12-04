import React from 'react';
import OrderCard from './components/OrderCard';

import { ORDER_BASE_URL } from '../../route/URLMap';


const Orders = () => {
    return (
        <div> 
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </div>

    )
    
};

export default Orders;