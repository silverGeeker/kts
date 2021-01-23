import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import About from "./About";
import Course from "./Course";
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";
import Contact from "./Contact";
import { FooterContainer} from "./containers/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
    <>
    
    <Router>
     <Navbar />
     {/*<div className="container mt-2" style={{ marginTop: 40 }}>*/}
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      {/*</div>*/}
      <FooterContainer />
    </Router>
    </>
    );
}

export default App;
