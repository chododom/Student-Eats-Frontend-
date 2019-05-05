import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Header extends Component{

    constructor(props){
        super(props);
        let foods = localStorage.getItem("cart");
        this.state = {
            food: (foods)?foods.split(", "):null
        };
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