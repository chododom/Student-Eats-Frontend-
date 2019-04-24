import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from "./Login";

export default class Header extends Component{
    render() {
        return (
            <Row>
                <Col>
                   <div className="contright-header"><p>Profil</p></div>
                </Col>
            </Row>
        );
    }
}