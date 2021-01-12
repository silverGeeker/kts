import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./Navbar";

const Navbar = () => {
    return (
        <>
        <Nav>
          <Bars />
          <NavMenu>
             <NavLink exact to="/home" activeStyle>
                 HOME
             </NavLink>
             <NavLink exact to="/course" activeStyle>
                 COURSE
             </NavLink>
             <NavLink exact to="/about" activeStyle>
                 ABOUT US
             </NavLink>
             <NavLink exact to="/contact" activeStyle>
                 CONTACT US
             </NavLink>
          </NavMenu>
          <NavBtn>
          <NavBtnLink to="/courses"> Apply for Demo Class </NavBtnLink>
          </NavBtn>
        </Nav>
        </>
    );
}

export default Navbar;
