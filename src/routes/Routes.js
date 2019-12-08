import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Items from "../client/items/Items";
import Member from "../client/member/Member";
import Home from "../client/home/Home";
import Login from "../client/login/Login";

import ProtectedRoute from './components/ProtectedRoute';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/items" component={Items} />
        <ProtectedRoute exact path="/member" component={Member} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
