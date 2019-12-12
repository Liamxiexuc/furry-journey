import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Items from "../client/items/Items";
import Member from "../client/member/Member";
import Home from "../client/home/Home";
import Login from "../client/login/Login";
import Signup from "../client/signup/SignUp";
import SignupSuccess from "../client/signup/components/SignupSuccess";
import AboutUs from "../client/aboutUs/AboutUs";
import Basket from "../client/items/components/Basket";
import ErrorMessage from "../UI/errorMessage/ErrorMessage";
import {
  ITEM_CLIENT_BASE_URL,
  SIGNUP_CLIENT_URL,
  AFTER_SIGNUP_URL,
  ABOUTUS_URL,
  ERROR_URL
} from "./URLMap";

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
        <Route exact path={SIGNUP_CLIENT_URL} component={Signup} />
        <Route exact path={AFTER_SIGNUP_URL} component={SignupSuccess} />
        <Route exact path={ABOUTUS_URL} component={AboutUs} />
        <Route exact path="/test" component={Basket} />
        <Route exact path={ERROR_URL} component={ErrorMessage} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
