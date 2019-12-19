import React from "react";
import Routes from "./routes/Routes";
import TopNav from "./client/navigation/TopNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="App-body">
        <Routes />
      </div>
    </div>
  );
}

export default App;

//      {isAuthenticated() && <TopNav />}
