import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from "./resources/ktlogo1.png";
import logo2 from "./resources/ktlogo2.jpg";
import "./NavMenu.css";

const NavMenu = () => {
    return (
        <>
  <Navbar bg="" variant="">
    <Navbar.Brand href="https://wa.link/ojd62n">
      <img
        alt=""
        src={logo1}
        width="100"
        height="100"
        className="d-inline-block align-top ml-5"
      />{' '}
       <img
        alt=""
        src={logo2}
        width="150"
        height="30"
        className="d-inline-block align-top ml-3 mt-4"
      />{' '}
      <span className="d-inline-block pad text-success"> <h4><p>Contact on Whatsapp</p></h4>  </span>
    </Navbar.Brand>
  </Navbar>
</>
    );
}

export default NavMenu;