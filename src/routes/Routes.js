import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Items from "../client/items/Items";
import ItemDetails from "../client/items/ItemDetails";
import Member from "../client/member/Member";
import Home from "../client/home/Home";
import Login from "../client/login/Login";
import Signup from "../client/signup/SignUp";
import SignupSuccess from "../client/signup/components/SignupSuccess";
import AboutUs from "../client/aboutUs/AboutUs";
import ErrorMessage from "../UI/errorMessage/ErrorMessage";
import CheckOut from "../client/checkout/CheckOut";
import AfterCheckOut from "../client/checkout/AfterCheckOut";
import {
  HOME_CLIENT_BASE_URL,
  ITEM_CLIENT_BASE_URL,
  USER_CLIENT_BASE_URL,
  LOGIN_CLIENT_URL,
  SIGNUP_CLIENT_URL,
  AFTER_SIGNUP_URL,
  ABOUTUS_URL,
  ERROR_URL,
  CHECKOUT_URL,
  AFTER_CHECKOUT_URL
} from "./URLMap";

import ProtectedRoute from "./components/ProtectedRoute";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Redirect exact from="/" to={HOME_CLIENT_BASE_URL} />
        <Redirect exact from="/client" to={HOME_CLIENT_BASE_URL} />
        <Route exact path={HOME_CLIENT_BASE_URL} component={Home} />
        <Route exact path={ITEM_CLIENT_BASE_URL} component={Items} />
        <Route
          exact
          path={`${ITEM_CLIENT_BASE_URL}/:id`}
          component={ItemDetails}
        />
        <ProtectedRoute exact path={USER_CLIENT_BASE_URL} component={Member} />
        <Route exact path={LOGIN_CLIENT_URL} component={Login} />
        <Route exact path={SIGNUP_CLIENT_URL} component={Signup} />
        <Route exact path={AFTER_SIGNUP_URL} component={SignupSuccess} />
        <Route exact path={ABOUTUS_URL} component={AboutUs} />
        <ProtectedRoute exact path={CHECKOUT_URL} component={CheckOut} />
        <Route exact path={AFTER_CHECKOUT_URL} component={AfterCheckOut} />
        <Route exact path={ERROR_URL} component={ErrorMessage} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
