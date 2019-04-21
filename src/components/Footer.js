import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from "react-bootstrap/es/Jumbotron";

export default class Footer extends Component{
    render() {
        return (
            <Jumbotron id={'FooterWrapper'}>
                <p>Frontend created by: Ta kterou nikdo nikdy neviděl a Čenda (all hail our divine leader, Dominik)</p>
            </Jumbotron>
        );
    }
}
