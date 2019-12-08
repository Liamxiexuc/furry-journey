import React, {Fragment} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


import OrderNew from '../manager/orders/OrderDetails';
import OrderEdit from '../manager/orders/OrderEdit';
import Orders from '../manager/orders/Orders';

import Items from '../manager/menu/Items';
import ItemNew from '../manager/menu/ItemNew';
import ItemDetails from '../manager/menu/ItemDetails';
import ItemEdit from '../manager/menu/ItemEdit';

import ProtectedRoute from './components/ProtectedRoute';

import {
    ITEM_BASE_URL,
    ORDER_BASE_URL,
    USER_BASE_URL
} from './URLMap';

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Redirect exact from="/" to={ ITEM_BASE_URL } />
                <ProtectedRoute exact path={ ITEM_BASE_URL } component={ Items } />
                <ProtectedRoute exact path={`${ ITEM_BASE_URL }/new`} component={ ItemNew } />
                <ProtectedRoute exact path={`${ ITEM_BASE_URL }/:id`} component={ ItemDetails } />
                <ProtectedRoute exact path={`${ ITEM_BASE_URL }/:id/edit`} component={ ItemEdit } />


                <ProtectedRoute exact path={ ORDER_BASE_URL } component={ Orders } />
                <ProtectedRoute exact path={`${ ORDER_BASE_URL }/new`} component={ OrderNew }/>
                <ProtectedRoute exact path={`${ ORDER_BASE_URL }/:id`} component={ OrderDetails } />
                <ProtectedRoute exact path={`${ ORDER_BASE_URL }/:id/edit`} component={ OrderEdit } />
           
            </Switch>
        </Fragment>
    )
}

export default Routes;
