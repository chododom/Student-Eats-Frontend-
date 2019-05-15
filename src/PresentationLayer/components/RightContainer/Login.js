import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios/index";
import {BASE_URL} from "../../../config/environment";
import {NavLink} from "react-router-dom";

const login_url = BASE_URL + "/login";

/**
 * component which takes care of the user login
 */
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.state = {
            password: "",
            username: "",
            isLoggedIn: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    /**
     * This component handles login submit and if the user information is correct then saves the user token
       and the user is logged in.
     * @param event
     */
    handleLoginSubmit = event => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let status = undefined;
        axios.post(login_url,
            {
                username: username,
                password: password
            })
            .then((response) => {
                localStorage.setItem("token", response.headers.authorization);
                localStorage.setItem("username", username);
                status = response.status;
                this.props.callbackFromParent(username);
            })
    };

    render() {
        return (
            <div className="Login">
                <div className="contright-header"><p>Přihlášení</p></div>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Enter username"/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Heslo: </Form.Label>
                        <Form.Control
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Zapamatovat přihlášení"/>
                    </Form.Group>
                    <Button
                        variant="secondary"
                        type="submit"
                        onClick={this.handleLoginSubmit}
                        disabled={!this.validateForm()}>
                        Přihlásit se</Button>
                </Form>
                <p>Nemáte přihlašovací údaje?<NavLink to="/registrace"> Zaregistrujte se!</NavLink></p>
            </div>
        );
    }
}
