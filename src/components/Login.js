import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: "",
            isLoggedIn: false
        };
        this.props.callbackFromParent(false);
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
        this.props.callbackFromParent(true, 1);
    }

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
                        type="button"
                        onClick={this.handleSubmit}
                        disabled={!this.validateForm()}>
                        Přihlásit se</Button>
                </Form>
                <p>Nemáte přihlašovací údaje?<a href="/registrace">  Zaregistrujte se!</a></p>
            </div>
        );
    }
}
