import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const url = 'https://private-9dc2d6-studenteats.apiary-mock.com/login'; // from api-ari - mock data


export default class Login extends Component {
    constructor(props) {
        super(props);
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
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = event => {
        event.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        var status = undefined;
        var userId = undefined;
            axios.post(url,
            {
                username: username,
                password: password
            })
            .then(function (response) {
                console.log("Post");
                console.log(response);
                status = response.status;
            })
            .catch(function (error) {
                console.log(error);
            });
        userId = 1;
        if ( status == 200 ){
            this.props.callbackFromParent(userId);
            window.location.reload();
        }
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
                            placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Heslo: </Form.Label>
                        <Form.Control
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Zapamatovat přihlášení" />
                    </Form.Group>
                    <Button
                        variant="secondary"
                        type="submit"
                        onClick={this.handleSubmit}
                        disabled={!this.validateForm()}>
                        Přihlásit se</Button>
                </Form>
                <p>Nemáte přihlašovací údaje?<a href="/registrace">  Zaregistrujte se!</a></p>
            </div>
        );
    }
}
