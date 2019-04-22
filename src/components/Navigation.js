import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



export default class Navigation extends Component{
    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Student Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Objednávka" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#objednavka/technicka_menza">Technická menza</NavDropdown.Item>
                            <NavDropdown.Item href="#objednavka/masarykova_kolej">Masarykova kolej</NavDropdown.Item>
                            <NavDropdown.Item href="#objednavka/studentsky_dum">Studentský dům</NavDropdown.Item>
                            <NavDropdown.Item href="#objednavka/pizzeria_LaFontanella">Pizzeria La Fontanella</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#donaska">Donáška</Nav.Link>
                        <Nav.Link href="#profil">Profil</Nav.Link>
                        <Nav.Link href="#kosik">Košík</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
