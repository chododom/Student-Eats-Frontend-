import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Header extends Component{
    render() {
        return (
            <Row>
                <Col>
                    <div className="contright-header"><p>Košík</p></div>
                </Col>
            </Row>
        );
    }
}