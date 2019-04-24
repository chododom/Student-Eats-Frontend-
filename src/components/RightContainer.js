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
        //this.setState({userId: userId});
        //this.setState({isLoggedIn: isLoggedIn});
        localStorage.setItem("userId", userId);
    };

    render() {
        return (
            <Container id="ContainerRight">
                { localStorage.getItem("userId") != null && localStorage.getItem("userId") !== 'undefined' && <Profile userId={localStorage.getItem("userId")} />}
                { ( localStorage.getItem("userId") == null || localStorage.getItem("userId") === 'undefined' )&& <Login callbackFromParent={this.setLoginState}/>}
                <Basket/>}
            </Container>
        );
    }
}