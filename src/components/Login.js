import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <div className="Login">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Heslo: </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Zapamatovat přihlášení" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">Přihlásit se</Button>
                </Form>
            </div>
        );
    }
}
