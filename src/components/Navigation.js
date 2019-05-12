import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
    NavLink,
} from "react-router-dom";
import MenuMenza from "../views/MenuMenza";
import Profile from "./Profile";

export default class Navigation extends Component{
    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand><NavLink to="/">Student Eats</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item><NavLink to="/technicka_menza">Technická menza</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to="/masarykova_kolej">Masarykova kolej</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to="/studentsky_dum">Studentský dům</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to="/pizzeria_LaFontanella">Pizzeria La Fontanella</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        { localStorage.getItem("username") != null && localStorage.getItem("username") !== 'undefined' &&  <Nav.Link href="/donaska">Donáška</Nav.Link>}
                        { localStorage.getItem("username") != null && localStorage.getItem("username") !== 'undefined' &&  <Nav.Link href="/kosik">Košík</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
