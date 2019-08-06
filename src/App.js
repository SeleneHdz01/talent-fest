import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SiderDemo from "./Components/Dashboard";
import Login from "./Components/Login";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={SiderDemo} />
    </React.Fragment>
  );
}

export default App;
