import React, { Component } from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {BASE_URL} from "../config/environment";
import Alert from 'react-bootstrap/Alert'

const registration_url = BASE_URL + "/user";
const login_url = BASE_URL + "/login";

export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname: "",
            username: "",
            password: "",
            passwordAgain: "",
            telNumber: "",
            success: false
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

    successMessage(){
        if ( this.state.success ){
            return (
                <Alert variant="success">
                    <Alert.Heading>Byl jste úspěšně přihlášen</Alert.Heading>
                </Alert>
            )
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        let name = this.state.name;
        let surname = this.state.surname;
        let username = this.state.username;
        let password = this.state.password;
        let phoneNumber = this.state.telNumber;
        var status = undefined;
        axios.post(registration_url,
            {
                name: name,
                surname: surname,
                phoneNumber: phoneNumber,
                username: username,
                password: password
            })
            .then((response) => {
                status = response.status;
                if ( status === 201 ){
                    this.setState({success: true})
                }
                console.log(response.status)
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    render() {
        return (
            <div>
                <Navigation />
                <Header />
                {this.successMessage()}
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
                            variant="secondary"
                            type="submit"
                            onClick={this.handleSubmit}
                            disabled={!this.validateForm()}>
                            Registrovat</Button>
                    </Form>
                    {this.successMessage()}
                    <Footer />
                </div>
            </div>
        );
    }
}
