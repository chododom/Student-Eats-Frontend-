import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import logoAlpha from '../../assets/logo_alpha.png'
import {NavLink} from "react-router-dom";

/**
 * represents a basic Footer component
 */
export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }
    render() {
        return (
            <Jumbotron id={'FooterWrapper'}>
                <ul>
                    <li className="foot-logo"><img src={logoAlpha}
                                                   className="img-reulonsive" alt="Image"/></li>
                    <li className="list-link">
                        <NavLink to="/obchodni_podminky">Obchodní podmínky</NavLink>
                    </li>
                    <li className="list-link">
                        <NavLink to="/alergeny">Alergeny</NavLink>
                    </li>
                    <li className="list-link">
                        <NavLink to="/alergeny">Kontakty</NavLink>
                    </li>
                </ul>

            </Jumbotron>
        );
    }
}
