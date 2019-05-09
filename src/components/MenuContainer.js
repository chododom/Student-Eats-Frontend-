import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rizek from '../assets/rizek.png'
import svickova from '../assets/svickova.png'
import spagety from '../assets/spagety.png'
import axios from "axios";

export default class MenuContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            foodItems: []
        };
    }

    makeCol(items, obj){
        const handler = function(index){
            /**
             * sends parent object information about what food is supposed to be added to cart
             * */
            obj.props.cartAdd(index);
            var tmp = localStorage.getItem("cart");
            if ( tmp === 'undefined' || tmp == null){
                localStorage.setItem("cart", index);
                return;
            }
            tmp = tmp + ", " + index;
            localStorage.setItem("cart", tmp);
            console.log(localStorage.getItem("cart", tmp))
        };
        var itemsList = items.map(function(item){
            console.log(item.id);
            return <Col key={item.id}>
                <div className="panel panel-primary">
                    <div className="panel-body"><img src={item.picture}
                                                     className="img-responsive" alt="Image" /></div>
                    <div className="meal-name"><p>{item.name}</p></div>
                    <div className="meal-price">
                        <ul>
                            <li className="list-meal"><p>{item.price} Kč</p></li>
                            <li className="list-meal">
                                <Button variant="danger"
                                        type="button"
                                        //disabled={localStorage.getItem("userId") == null || localStorage.getItem("userId") === 'undefined'}
                                        key={item.id}
                                        onClick={() => handler(item.id)}
                                        >+</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>;
        });
        return  <Row className="foodRow" >{ itemsList }</Row>
    }
    foods(obj){
        console.log(this.props.food);
        var renderer = [];
        var tmpItems = [];
        this.props.food.map((item, index) => {
            tmpItems.push(item);
            if ( index % 3 == 2 ) {
                renderer.push(
                    this.makeCol(tmpItems, obj));
                tmpItems = [];
            }
        });
        if ( tmpItems . length > 0 )
            renderer.push(
                this.makeCol(tmpItems, obj)); // todo - change this
        return renderer;
    }
    render() {
        return (
            <Container id="MenuContainer">
                <div className="menu-header"><p>Dnes 22.4.2019 v menze {this.props.canteenName } se podávají tato jídla</p></div>
                {this.foods(this)}
            </Container>
        );
    }
}