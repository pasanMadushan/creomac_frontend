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
import Dashboard from "./pages/Admin/ProjectDashboard.js";
import Category from "./pages/Admin/Category.js";
import Newsteller from './pages/Admin/NewstellerSubs.js';
import ManageUsers from './pages/Admin/ManageUsers.js';
import EditProfile from './pages/Admin/EditProfile.js';
import PostProject from './pages/Admin/PostProject.js';


function App() {
  // Axios.defaults.withCredentials = true;
  return (
    <ChakraProvider>
      
          <Router>   
            <Switch >
               <Route path="/signup" exact component={SignUp} /> 
               <Route path="/login" exact component={Login} />     
              <Route path="/dashboard" exact component={Dashboard} />  
              <Route path="/category" exact component={Category} />   
              <Route path="/newsteller" exact component={Newsteller} />
              <Route path="/manageusers" exact component={ManageUsers} />
              <Route path="/editprofile" exact component={EditProfile} />
              <Route path="/postproject" exact component={PostProject} />

              <Route path="/" exact component={Home} />
              <Route path="/overview" exact component={Overview} /> 
             
            </Switch>
          </Router>
        </ChakraProvider>
  );
}

export default App;
