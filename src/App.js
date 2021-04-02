import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Axios from "axios";

import Navbar from "./components/CommonNavbar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Login from "./pages/Admin/Login";
import SignUp from "./pages/Admin/SignUp";
import Dashboard from "./pages/Admin/Dashboard.js";

function App() {
  // Axios.defaults.withCredentials = true;
  return (
    <ChakraProvider>
      
          <Router>   
            <Switch >
               <Route path="/signup" exact component={SignUp} /> 
               <Route path="/login" exact component={Login} />     
              <Route path="/dashboard" exact component={Dashboard} />   
              <Route path="/" exact component={Home} />
              <Route path="/overview" exact component={Overview} /> 
             
            </Switch>
          </Router>
        </ChakraProvider>
  );
}

export default App;
