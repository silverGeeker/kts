import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h3 className="navbar-logo">Gravity Institute<i className="fab fa-react"></i></h3>
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
                <Button>WhatsApp</Button>
            </nav>
        )
    }
}

export default Navbar