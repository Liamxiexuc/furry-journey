import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./styles/topNav.scss";
import { Button } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";
import { deleteToken, isAuthenticated } from "../../utils/authentication";
import {
  LOGIN_URL,
  USER_BASE_URL,
  HOME_BASE_URL,
  ITEM_BASE_URL
} from "../../routes/URLMap";

const logout = history => {
  deleteToken();
  history.push(HOME_BASE_URL);
};

const TopNav = ({ history }) => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <a className="nav-left_logo" href={HOME_BASE_URL}>
          <img src="logo.png" alt="logo" />
        </a>
        <NavLink className="nav-left_brand" to={HOME_BASE_URL}>
          NewBee Pizza
        </NavLink>
      </div>
      <ul className="nav-item">
        <NavLink className="nav-item" to={HOME_BASE_URL}>
          Home
        </NavLink>
        <NavLink className="nav-item" to={USER_BASE_URL}>
          Member
        </NavLink>
        <NavLink className="nav-item" to={ITEM_BASE_URL}>
          Menu
        </NavLink>
        <NavLink className="nav-item" to={ITEM_BASE_URL}>
          About us
        </NavLink>
      </ul>
      <Button
        size="huge"
        compact
        positive
        onClick={() => logout(history)}
        className="nav-logout"
      >
        MY ACCOUNT
      </Button>
    </nav>
  );
};

export default withRouter(TopNav);

/*   {isAuthenticated() && (
          <Button onClick={() => logout(history)} className="nav-logout">
            Sign out
          </Button>
        )} */
