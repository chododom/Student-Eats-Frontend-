import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import logoAlpha from '../logo_alpha.png'

export default class Footer extends Component{
    render() {
        return (
            <Jumbotron id={'FooterWrapper'}>
                <ul>
                    <li className="foot-logo"><img src={logoAlpha}
                                                   className="img-reulonsive" alt="Image"/></li>
                    <li className="list-link">
                        <a href="#obchodni_podminky">Obchodní podmínky</a>
                    </li>
                    <li className="list-link">
                        <a href="#alergeny">Alergeny</a>
                    </li>
                    <li className="list-link">
                        <a href="#objednavka">Objednávka</a>
                    </li>
                    <li className="list-link">
                        <a href="#roznaska">Roznáška</a>
                    </li>
                    <li className="list-link">
                        <a href="#Profil">Profil</a>
                    </li>
                    <li className="list-link">
                        <a href="#kosik">Košík</a>
                    </li>
                </ul>

            </Jumbotron>
        );
    }
}
