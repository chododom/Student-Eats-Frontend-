import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Profile from "./Profile";
import Basket from "./Basket";
import Login from "./Login";

export default class RightContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userId: -1
        };
    }
    setLoginState = (isLoggedIn, userId) => {
        console.log("In my callback");
        // todo - update session (create session)
        this.setState({userId: userId});
        localStorage.setItem("userId", userId);
    };

    render() {
        return (
            <Container id="ContainerRight">
                {this.state.isLoggedIn && <Profile userId={this.state.userId} />}
                {!this.state.isLoggedIn && <Login callbackFromParent={this.setLoginState}/>}
                <Basket/>}
            </Container>
        );
    }
}