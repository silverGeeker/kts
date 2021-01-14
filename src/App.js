import React from "react";
import NavMenu from "./NavMenu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import About from "./About";
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";
import Contact from "./Contact";
import { FooterContainer} from "./containers/footer";


const App = () => {
    return (
    <>
    
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
      <FooterContainer />
    </Router>
    </>
    );
}

export default App;
