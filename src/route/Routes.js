import React, {Fragment} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Orders from '../manager/orders/Orders';
import OrderCard from '../manager/orders/components/OrderCard'
import Items from '../manager/menu/Items';

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Redirect exact from="/" to="/manager/menu" />
                <Route exact path="/manager/menu" component={ Items } />

                <Route exact path="/manager/orders" component={ Orders } />
                <Route exact path="/manager/orders/:id" component={ OrderCard } />
            </Switch>
        </Fragment>
    )
}

export default Routes;
