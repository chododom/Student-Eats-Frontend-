import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rizek from '../rizek.png'
import svickova from '../svickova.png'
import gulas from '../gulas.png'
import spagety from '../spagety.png'


export default class MenuContainer extends Component{
    render() {
        return (
            <Container id="MenuContainer">
                <div className="menu-header"><p>Dnes 22.4.2019 se v Technické menze podávají tato jídla</p></div>
                <Row>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-body"><img src={rizek}
                                                             className="img-responsive" alt="Image" /></div>
                            <div className="meal-name"><p>Kuřecí řízek s bramborovým salátem</p></div>
                            <div className="meal-price">
                                <ul>
                                <li className="list-meal"><p>100 Kč</p></li>
                                <li className="list-meal"><Button variant="danger" type="submit">+</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-body"><img src={svickova}
                                                             className="img-responsive" alt="Image"/></div>
                            <div className="meal-name"><p>Svíčková na smetaně s houskovým knedlíkem</p></div>
                            <div className="meal-price">
                                <ul>
                                    <li className="list-meal"><p>100 Kč</p></li>
                                    <li className="list-meal"><Button variant="danger" type="submit">+</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-body"><img src={gulas}
                                                             className="img-responsive" alt="Image"/></div>
                            <div className="meal-name"><p>Guláš s karlovarským knedlíkem</p></div>
                            <div className="meal-price">
                                <ul>
                                    <li className="list-meal"><p>100 Kč</p></li>
                                    <li className="list-meal"><Button variant="danger" type="submit">+</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-body"><img src={gulas}
                                                             className="img-responsive" alt="Image"/></div>
                            <div className="meal-name"><p>Guláš s karlovarským knedlíkem</p></div>
                            <div className="meal-price">
                                <ul>
                                    <li className="list-meal"><p>100 Kč</p></li>
                                    <li className="list-meal"><Button variant="danger" type="submit">+</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-body"><img src={spagety}
                                                             className="img-responsive" alt="Image"/></div>
                            <div className="meal-name"><p>Boloňské špagety</p></div>
                            <div className="meal-price">
                                <ul>
                                    <li className="list-meal"><p>100 Kč</p></li>
                                    <li className="list-meal"><Button variant="danger" type="submit">+</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-body"><img src={rizek}
                                                             className="img-responsive" alt="Image"/></div>
                            <div className="meal-name"><p>Kuřecí řízek s bramborovým salátem</p></div>
                            <div className="meal-price">
                                <ul>
                                    <li className="list-meal"><p>100 Kč</p></li>
                                    <li className="list-meal"><Button variant="danger" type="submit">+</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}