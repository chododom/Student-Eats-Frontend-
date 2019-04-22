import React, { Component } from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import technicka from '../technicka.png'
import studentsky from '../studentsky.png'
import masarycka from '../masarycka.png'
import fontanella from '../fontanella.png'

import {
    Route,
    NavLink,
    BrowserRouter,
    Switch
} from "react-router-dom";
import RightContainer from "./RightContainer";

export default class HomePage extends Component{
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <Container id="ContainerCenter">
                    <Row>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><NavLink to="#technicka_menza"><img src={technicka}
                                                                                                           className="img-responsive" alt="Image" /></NavLink></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#masarykova_kolej"><img src={masarycka}
                                                                                                        className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#studentsky_dum"><img src={studentsky}
                                                                                                      className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#pizzeria_LaFontanella"><img src={fontanella}
                                                                                                              className="img-responsive" alt="Image" /></a></div>
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
