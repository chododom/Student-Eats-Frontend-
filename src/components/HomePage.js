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
                                <div className="panel-body"><a href="#objednavka/technicka_menza"><img src={technicka}
                                                                                                       className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#objednavka/masarykova_kolej"><img src={masarycka}
                                                                                                        className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#objednavka/studentsky_dum"><img src={studentsky}
                                                                                                      className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#objednavka/pizzerila_LaFontanella"><img src={fontanella}
                                                                                                              className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container id="ContainerRight">
                    <Row>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#objednavka/studentsky_dum"><img src={studentsky}
                                                                                                      className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="panel panel-primary">
                                <div className="panel-body"><a href="#objednavka/pizzerila_laFontanella"><img src={fontanella}
                                                                                                              className="img-responsive" alt="Image" /></a></div>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <Footer />
            </div>
        );
    }
}
