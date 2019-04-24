import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Profile from "./Profile";
import Basket from "./Basket";
import HomePage from "./HomePage";
import Login from "./Login";

export default class RightContainer extends Component{

    render() {
        return (
            <Container id="ContainerRight">
                <Login/>
                <Profile/>
                <Basket/>
            </Container>
        );
    }
}