import React from "react";
import { Route } from "react-router-dom";
import Routes from "./routes/Routes";
import TopNav from "./client/navigation/TopNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { isAuthenticated } from './utils/authentication';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes />
    </div>
  );
}

export default App;

//      {isAuthenticated() && <TopNav />}
