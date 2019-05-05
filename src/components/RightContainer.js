import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Profile from "./Profile";
import Basket from "./Basket";
import Login from "./Login";

export default class RightContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem("userId") != null && localStorage.getItem("userId") !== undefined,
            userId: -1
        };
    }
    setLoginState = (userId) => {
        localStorage.setItem("userId", userId);
        this.setState({
            isLoggedIn: true,
            userId
        })
    };

    logout = () => {
        this.setState({
                isLoggedIn: false,
                userId: -1
            })
    }


    render() {
        if(!this.state.isLoggedIn){
            return (
                <Container id="ContainerRight">
                    <Login callbackFromParent={this.setLoginState}/>
                </Container>
            )
        }else{
            return (
                <Container id="ContainerRight">
                    <Profile userId={this.state.userId} logoutHandler={this.logout} />
                    <Basket />
                </Container>
            );
        }
    }
}