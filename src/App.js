import React from "react";
import NavMenu from "./NavMenu";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";
import Contact from "./Contact";


const App = () => {
    return (
    <>
    <NavMenu />
    <Router>
     <Navbar />
     <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    );
}

export default App;
