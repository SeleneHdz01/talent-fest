import React from "react";
import SiderDemo from "./Components/Dashboard";
import "./App.css";
import Login from "./Components/Login";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
       
      <Route  exact path="/" component={Login}/>
      <Route  path="/dashboard" component={SiderDemo}/>
      
    
       
     </React.Fragment>  
  );
}

export default App;
