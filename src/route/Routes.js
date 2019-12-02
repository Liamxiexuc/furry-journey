import React, {Fragment} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Orders from '../manager/orders/Orders';
import OrderCard from '../manager/orders/components/OrderCard'
import Items from '../manager/menu/Items';
import ItemNew from '../manager/menu/ItemNew';
import ItemDetails from '../manager/menu/ItemDetails';
import ItemEdit from '../manager/menu/ItemEdit';

import {
    ITEM_BASE_URL,
    ORDER_BASE_URL,
    SHOP_BASE_URL,
    USER_BASE_URL
} from './URLMap';

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Redirect exact from="/" to="/manager/menu" />
                <Route exact path="/manager/menu" component={ Items } />
                <Route exact path="/manager/menu/new" component={ ItemNew } />
                <Route exact path="/manager/menu/:id" component={ ItemDetails } />
                <Route exact path="/manager/menu/:id/edit" component={ ItemEdit } />


                <Route exact path="/manager/orders" component={ Orders } />
                <Route exact path="/manager/orders/:id" component={ OrderCard } />
           
            </Switch>
        </Fragment>
    )
}

export default Routes;
