import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Profile from "./Profile";
import Login from "./Login";
import Cart from "./Cart/Cart";

export default class RightContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem("username") != null && localStorage.getItem("username") !== undefined,
            userId: -1
        };
    }

    /**
     * checks whether the user is logged in
     */
    componentDidMount() {
        if ( localStorage.getItem("username") != null && localStorage.getItem("username") !== 'undefined' ){
            this.setState({
                isLoggedIn: true,
            })
        }
    }

    /**
     * sets login state to true
     */
    setLoginState = () => {
        this.setState({
            isLoggedIn: true,
        })
    };

    /**
     * logs out the user, setting login state to false
     */
    logout = () => {
        this.setState({
                isLoggedIn: false,
                userId: -1
            })
    };

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
                    <Profile logoutHandler={this.logout} />
                    <Cart/>
                </Container>
            );
        }
    }
}