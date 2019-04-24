import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import MenuMenza from "./MenuMenza";
import Profile from "./Profile";

export default class Navigation extends Component{
    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/">Student Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/technicka_menza">Technická menza</NavDropdown.Item>
                            <NavDropdown.Item href="/masarykova_kolej">Masarykova kolej</NavDropdown.Item>
                            <NavDropdown.Item href="/studentsky_dum">Studentský dům</NavDropdown.Item>
                            <NavDropdown.Item href="/pizzeria_LaFontanella">Pizzeria La Fontanella</NavDropdown.Item>
                        </NavDropdown>
                        { localStorage.getItem("userId") != null && localStorage.getItem("userId") !== 'undefined' &&  <Nav.Link href="/donaska">Donáška</Nav.Link>}
                        { localStorage.getItem("userId") != null && localStorage.getItem("userId") !== 'undefined' &&  <Nav.Link href="/kosik">Košík</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
