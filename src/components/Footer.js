import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from "react-bootstrap/es/Jumbotron";

export default class Footer extends Component{
    render() {
        return (
            <Jumbotron id={'FooterWrapper'}>
                <p>Frontend created by: Justýna a Čenda (backend sucks)</p>
            </Jumbotron>
        );
    }
}
