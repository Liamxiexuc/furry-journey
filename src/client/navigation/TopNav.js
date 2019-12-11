import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./styles/topNav.scss";
import { Button } from "semantic-ui-react";
import { deleteToken, isAuthenticated } from "../../utils/authentication";
import {
  LOGIN_CLIENT_URL,
  USER_CLIENT_BASE_URL,
  HOME_CLIENT_BASE_URL,
  ITEM_CLIENT_BASE_URL,
  ABOUTUS_URL
} from "../../routes/URLMap";

const logout = history => {
  deleteToken();
  history.push(HOME_CLIENT_BASE_URL);
};

const login = history => {
  history.push(LOGIN_CLIENT_URL);
};

const TopNav = ({ history }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <a className="nav-left_logo" href={HOME_CLIENT_BASE_URL}>
          <img src="logo.png" alt="logo" />
        </a>
        <NavLink className="nav-left_brand" to={HOME_CLIENT_BASE_URL}>
          NewBee Pizza
        </NavLink>
      </div>
      <ul className="nav-item">
        <NavLink className="nav-item" to={HOME_CLIENT_BASE_URL}>
          Home
        </NavLink>
        <NavLink className="nav-item" to={USER_CLIENT_BASE_URL}>
          Member
        </NavLink>
        <NavLink className="nav-item" to={ITEM_CLIENT_BASE_URL}>
          Menu
        </NavLink>
        <NavLink className="nav-item" to={ABOUTUS_URL}>
          About us
        </NavLink>
      </ul>
      {isAuthenticated() ? (
        <Button
          size="huge"
          compact
          negative
          onClick={() => logout(history)}
          className="nav-logout"
        >
          SIGN OUT
        </Button>
      ) : (
        <Button
          size="huge"
          compact
          positive
          onClick={() => login(history)}
          className="nav-login"
        >
          MY ACCOUNT
        </Button>
      )}
    </nav>
  );
};

export default withRouter(TopNav);

/*   {isAuthenticated() && (
          <Button onClick={() => logout(history)} className="nav-logout">
            Sign out
          </Button>
        )}

         */
