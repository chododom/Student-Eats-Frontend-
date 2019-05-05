import React, { Component } from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname: "",
            username: "",
            password: "",
            passwordAgain: "",
            telNumber: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    validateForm() {
        return this.state.username.length > 0
            && this.state.password.length > 0
            && this.state.name.length > 0
            && this.state.surname.length > 0
            && this.state.telNumber.length > 0
            && this.state.password == this.state.passwordAgain;
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <div className="Registration">
                    <div className="contright-header"><p>Registrace</p></div>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Jméno: </Form.Label>
                            <Form.Control
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Zadejte své jméno" />
                        </Form.Group>
                        <Form.Group controlId="surname">
                            <Form.Label>Příjmení: </Form.Label>
                            <Form.Control
                                value={this.state.surname}
                                onChange={this.handleChange}
                                placeholder="Zadejte své příjmení" />
                        </Form.Group>
                        <Form.Group controlId="telNumber">
                            <Form.Label>Telefonní číslo: </Form.Label>
                            <Form.Control
                                value={this.state.telNumber}
                                onChange={this.handleChange}
                                placeholder="Zadejte své telefonní číslo" />
                        </Form.Group>
                        <Form.Group controlId="username">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control
                                value={this.state.username}
                                onChange={this.handleChange}
                                placeholder="Zadejte svůj přihlašovací username" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Heslo: </Form.Label>
                            <Form.Control
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Zadejte své heslo" />
                        </Form.Group>
                        <Form.Group controlId="passwordAgain">
                            <Form.Label>Potvrzení hesla: </Form.Label>
                            <Form.Control
                                type="password"
                                value={this.state.passwordAgain}
                                onChange={this.handleChange}
                                placeholder="Zadejte své heslo znovu" />
                        </Form.Group>
                        <Button
                            href='/'
                            variant="secondary"
                            type="submit"
                            disabled={!this.validateForm()}>
                            Registrovat</Button>
                    </Form>
                <Footer />
            </div>
            </div>
        );
    }
}
