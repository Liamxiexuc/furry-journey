import React, {Fragment} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


import OrderDetails from '../manager/orders/OrderDetails';
import OrderNew from '../manager/orders/OrderNew';
import OrderEdit from '../manager/orders/OrderEdit';
import Orders from '../manager/orders/Orders';

import Items from '../manager/menu/Items';
import ItemNew from '../manager/menu/ItemNew';
import ItemDetails from '../manager/menu/ItemDetails';
import ItemEdit from '../manager/menu/ItemEdit';

import Users from '../manager/user/Users';
import UserNew from '../manager/user/UserNew';
import UserDetails from '../manager/user/UserDetails';
import UserEdit from '../manager/user/UserEdit';

// import ProtectedRoute from './components/ProtectedRoute';

import {
    ITEM_BASE_URL,
    ORDER_BASE_URL,
    USER_BASE_URL,

} from './URLMap';

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Redirect exact from="/" to={ ORDER_BASE_URL } />
                {/* <Route exact path={LOGIN_URL} component={Login} /> */}
                < Route exact path={ ITEM_BASE_URL } component={ Items } />
                < Route exact path={`${ ITEM_BASE_URL }/new`} component={ ItemNew } />
                < Route exact path={`${ ITEM_BASE_URL }/:id`} component={ ItemDetails } />
                < Route exact path={`${ ITEM_BASE_URL }/:id/edit`} component={ ItemEdit } />


                <Route exact path={ ORDER_BASE_URL } component={ Orders } />
                < Route exact path={`${ ORDER_BASE_URL }/new`} component={ OrderNew }/>
                < Route exact path={`${ ORDER_BASE_URL }/:id`} component={ OrderDetails } />
                < Route exact path={`${ ORDER_BASE_URL }/:id/edit`} component={ OrderEdit } />

                <Route exact path={ USER_BASE_URL } component={ Users } />
                < Route exact path={`${ USER_BASE_URL }/new`} component={ UserNew }/>
                < Route exact path={`${ USER_BASE_URL }/:id`} component={ UserDetails } />
                < Route exact path={`${ USER_BASE_URL }/:id/edit`} component={ UserEdit } />
           
            </Switch>
        </Fragment>
    )
}

export default Routes;
