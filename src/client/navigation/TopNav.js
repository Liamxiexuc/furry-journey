import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./styles/topNav.scss";
import { Button } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";
import { deleteToken, isAuthenticated } from '../../utils/authentication';
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
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/items">Items</Nav.Link>
        <Nav.Link href="/member">Member</Nav.Link>

        {isAuthenticated() && (
          <Button onClick={() => logout(history)} className="nav-logout">
            Log out
          </Button>
        )}
      </Nav>
    </Navbar>
  );
};

export default withRouter(TopNav);
