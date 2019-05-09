import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightContainer from "./RightContainer";
import Footer from './Footer/Footer'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


/**
 * class for big basket /kosik
 */
export default class Basket extends Component{

    constructor(props){
        super(props);
        let foods = localStorage.getItem("cart");
        this.state = {
            food: (foods)?foods.split(", "):null,
            name: "",
            surname: "",
            telnumber: "",
            adress: "",
            building: "",
            room:"",
            note: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    getFoodInOrder(){
        let foodIndex = [];
        if(this.state.foods){
            foodIndex = this.state.foods;
            console.log(foodIndex);
        }
    }

    render() {

        return (
            <div id="Basket">
                <Navigation/>
                <Header/>
                <RightContainer/>
                <Row>
                    <Col>
                        <h4>Rekapitulace vaší objednávky</h4>
                        {this.getFoodInOrder()}
                    </Col>
                    <Col>
                        <h4>Doručovací údaje</h4>
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
                            <Form.Group controlId="adress">
                                <Form.Label>Ulice a číslo popisné:</Form.Label>
                                <Form.Control
                                    value={this.state.adress}
                                    onChange={this.handleChange}
                                    placeholder="Zadejte ulici a číslo popisné" />
                            </Form.Group>
                            <Form.Group controlId="building">
                                <Form.Label>Budova:</Form.Label>
                                <Form.Control
                                    value={this.state.building}
                                    onChange={this.handleChange}
                                    placeholder="Zadejte budovu" />
                            </Form.Group>
                            <Form.Group controlId="room">
                                <Form.Label>Místnost:</Form.Label>
                                <Form.Control
                                    value={this.state.room}
                                    onChange={this.handleChange}
                                    placeholder="Specifikujte místnost v budově" />
                            </Form.Group>
                            <Form.Group controlId="note">
                                <Form.Label>Poznámka:</Form.Label>
                                <Form.Control
                                    value={this.state.room}
                                    onChange={this.handleChange}
                                    placeholder="Zadejte poznámku k objednávce" />
                            </Form.Group>
                            <Button
                                //href='/'
                                variant="danger"
                                type="submit">
                                Objednat</Button>
                        </Form>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}