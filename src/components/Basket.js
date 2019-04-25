import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            food: []
        };
    }

    getFoodInOrder(){
        var foods = localStorage.getItem("cart");
        var foodIndex = [];
        foodIndex = foods.split(", ");
        console.log(foodIndex);
    }

    render() {
        return (
            <div id="Basket">
            <Row>
                <Col>
                    <div className="contright-header"><p>Košík</p></div>
                    {this.getFoodInOrder()}
                </Col>
            </Row>
            </div>
        );
    }
}