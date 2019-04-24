import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Profile from "./Profile";
import Basket from "./Basket";
import HomePage from "./HomePage";

export default class RightContainer extends Component{

    render() {
        return (
            <Container id="ContainerRight">
                <Profile/>
                <Basket/>}
            </Container>
        );
    }
}