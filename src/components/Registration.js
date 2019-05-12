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
            success: false,
            error: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    /**
     * checks whether all the attributes have been filled in
     * @returns {boolean}
     */
    validateForm() {
        return this.state.username.length > 0
            && this.state.password.length > 0
            && this.state.name.length > 0
            && this.state.surname.length > 0
            && this.state.telNumber.length > 0
            && this.state.password === this.state.passwordAgain;
    }

    /**
     * outputs success message during the proper time
     * @returns {*}
     */
    successMessage(){
        if ( this.state.success ){
            return (
                <Alert variant="success">
                    <Alert.Heading>Byl jste úspěšně přihlášen</Alert.Heading>
                </Alert>
            )
       }
    }


    /**
     * outputs error message during the proper time
     * @returns {*}
     */
    errorMessage(){
        if ( this.state.error ){
            return (
                <Alert variant="danger">
                    <Alert.Heading>Chyba při registraci - změňte prosím svůj username</Alert.Heading>
                </Alert>
            )
        }
    }

    /**
     * handles submit of the form and sends data to the backend with a request to create a new user
     * @param event
     */
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        let name = this.state.name;
        let surname = this.state.surname;
        let username = this.state.username;
        let password = this.state.password;
        let phoneNumber = this.state.telNumber;
        var status = undefined;
        this.setState({success: false});
        this.setState({error: true});
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
                if ( status === 201 ) {
                    this.setState({success: true});
                    this.setState({error: false});
                }
            })
    };


    render() {
        return (
            <div>
                <Navigation />
                <Header />
                {this.successMessage()}
                {this.errorMessage()}
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
                    {this.errorMessage()}
                    <Footer />
                </div>
            </div>
        );
    }
}
