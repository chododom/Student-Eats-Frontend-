import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/';
import * as serviceWorker from './serviceWorker';
import logo from './stea.png';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

ReactDOM.render(
    <div>
        <Navigation />
        <Header />
        <Container>
            <Row>
                <Col>
                    <div className="panel panel-primary">
                        <div className="panel-heading">Technická menza</div>
                        <div className="panel-body"><img src={logo}
                                                         className="img-responsive" alt="Image" />  </div>
                    </div>
                </Col>
                <Col>
                    <div className="panel panel-danger">
                        <div className="panel-heading">Studentský dům</div>
                        <div className="panel-body"><img src={logo}
                                                         className="img-responsive"  alt="Image" /></div>
                    </div>
                </Col>
                <Col>
                    <div className="panel panel-success">
                        <div className="panel-heading">Masarykova jídelna</div>
                        <div className="panel-body"><img src={logo}
                                                         className="img-responsive" alt="Image" /></div>
                    </div>
                </Col>
            </Row>
        </Container>
            <Container>
                <Row>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-heading">Menza 4</div>
                            <div className="panel-body"><img src={logo}
                                                             className="img-responsive" alt="Image" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-heading">Menza 5</div>
                            <div className="panel-body"><img src={logo}
                                                             className="img-responsive" alt="Image" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="panel panel-primary">
                            <div className="panel-heading">Menza 6</div>
                            <div className="panel-body"><img src={logo}
                                                             className="img-responsive" alt="Image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        <Footer />
    </div>
,
document.getElementById('root'));
