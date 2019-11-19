import React from 'react';
import { Route } from 'react-router-dom';

import Menu from '../manager/item/Menu';
import Order from '../manager/order/Order';

const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/manger/item" component={ Menu } />
            <Route path="/manger/order" component={ Order } />
        </React.Fragment>
    )
}

export default Routes;
