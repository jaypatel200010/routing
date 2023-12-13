import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Aboutus from "./Components/Aboutus";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Aboutus></Aboutus> */}
      {/* <Main></Main> */}
      <Router>
        <Switch>
          <Route path="/Aboutus">
            <Aboutus />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
