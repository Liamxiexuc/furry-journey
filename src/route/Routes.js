import React, {Fragment} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Menu from '../manager/items/Menu';
import Orders from '../manager/orders/Orders';

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Redirect exact from="/" to="/manager/items" />
                <Route exact path="/manager/items" component={ Menu } />
                <Route exact path="/manager/orders" component={ Orders } />
            </Switch>
        </Fragment>
    )
}

export default Routes;
