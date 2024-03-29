import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import gil from "../../resources/gil.png";
/*import { Button } from "../Button"*/
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                
           
          <img className="ml-2" src={gil} alt="" style={{width:200, height:200, marginTop:40 }} />
          <h2 style={{ color:'#990011FF' }} >Gravity Institute</h2>
        
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink exact className={item.cName} to={item.url} activeStyle>
                                {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar