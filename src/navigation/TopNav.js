import React from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import {
    ORDER_BASE_URL,
    ITEM_BASE_URL,
    USER_BASE_URL,
    LOGIN_URL,
} from '../route/URLMap';
import { isLoggedIn, removeToken } from '../utils/authentication';
import './styles/topNav.scss';

const logout = history => {
    removeToken();
    history.push(LOGIN_URL);
}

const TopNav = ({history}) => {
    if(!isLoggedIn()) return null;

    return (
        <nav className="top-nav-manager">
            <ul className="top-nav-ul">
                <NavLink to={ITEM_BASE_URL} className="nav-item" > Dishes </NavLink>                
                <NavLink to={ORDER_BASE_URL} className="nav-item"  > Orders </NavLink>
                <NavLink to={USER_BASE_URL} className="nav-item" > Users </NavLink>               
            </ul>
            <Button onClick={() => logout(history)} className="login-out-button" > Log out </Button> 
        </nav>
    )

};

export default withRouter(TopNav);