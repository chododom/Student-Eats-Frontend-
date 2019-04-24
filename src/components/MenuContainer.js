import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rizek from '../rizek.png'
import svickova from '../svickova.png'
import gulas from '../gulas.png'
import spagety from '../spagety.png'
import axios from "axios";

const url = 'https://private-9dc2d6-studenteats.apiary-mock.com/canteen/1/menu'; // from api-ari - mock data


export default class MenuContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: false,
            error: null,
            foodItems: []
        };
    }
    makeCol(items){
        var itemsList = items.map(function(item){
            return <Col>
                <div className="panel panel-primary">
                    <div className="panel-body"><img src={item.picture}
                                                     className="img-responsive" alt="Image" /></div>
                    <div className="meal-name"><p>{item.name}</p></div>
                    <div className="meal-price">
                        <ul>
                            <li className="list-meal"><p>{item.price} Kč</p></li>
                            <li className="list-meal"><Button variant="danger" type="submit">+</Button></li>
                        </ul>
                    </div>
                </div>
            </Col>;
        });
        return  <Row>{ itemsList }</Row>
    }
    foods(){
        console.log("WAAAAA");
        console.log(this.props.food);
        var renderer = [];
        var tmpItems = [];
        this.props.food.map((item, index) => {
            tmpItems.push(item);
            if ( index % 3 == 2 ) {
                renderer.push(
                    this.makeCol(tmpItems));
                tmpItems = [];
            }
        });
/*        if ( tmpItems != [] )
            renderer.push(
                this.makeCol(tmpItems));*/ // todo - change this
        return renderer;
    }
    render() {
        return (
            <Container id="MenuContainer">
                <div className="menu-header"><p>Dnes 22.4.2019 se v Technické menze podávají tato jídla</p></div>
                {this.foods()}
            </Container>
        );
    }
}