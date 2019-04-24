import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import logoAlpha from '../assets/logo_alpha.png'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Footer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }
    toggleHidden () {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        return (
            <Jumbotron id={'FooterWrapper'}>
                <ul>
                    <li className="foot-logo"><img src={logoAlpha}
                                                   className="img-reulonsive" alt="Image"/></li>
                    <li className="list-link">
                        <a href="/obchodni_podminky">Obchodní podmínky</a>
                    </li>
                    <li className="list-link">
                        <a href="/alergeny">Alergeny</a>
                    </li>
                    <li className="list-link">
                        <a href="/alergeny">Kontakty</a>
                    </li>
                </ul>

            </Jumbotron>
        );
    }
}
