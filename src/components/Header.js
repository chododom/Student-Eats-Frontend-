import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default class Header extends Component{
    render() {
        return (
            <Jumbotron id={'HeaderWrapper'}>
                <Container>
                    <h1>Student Eats</h1>
                    <p>Eat, feed & starve</p>
                </Container>
            </Jumbotron>
        );
    }
}
