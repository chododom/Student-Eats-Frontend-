import React, { Component } from 'react';
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import technicka from '../assets/technicka.png'
import studentsky from '../assets/studentsky.png'
import masarycka from '../assets/masarycka.png'
import fontanella from '../assets/fontanella.png'

import {
    NavLink,
} from "react-router-dom";
import RightContainer from "../components/RightContainer";

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <Container id="ContainerCenter">
                    <Row>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><NavLink to="/technicka_menza"><img src={technicka}
                                                                                                           className="img-responsive" alt="Image" /></NavLink></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><NavLink to="/masarykova_kolej"><img src={masarycka}
                                                                                                        className="img-responsive" alt="Image" /></NavLink></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><NavLink to="/studentsky_dum"><img src={studentsky}
                                                                                                      className="img-responsive" alt="Image" /></NavLink></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><NavLink to="/pizzeria_LaFontanella"><img src={fontanella}
                                                                                                              className="img-responsive" alt="Image" /></NavLink></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <RightContainer/>
                <Footer />
            </div>
        );
    }
}
