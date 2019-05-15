import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class MenuContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            foodItems: []
        };
    }

    /**
     * sends parent object information about what food is supposed to be added to cart
     * */
    makeCol(items, obj){
        const handler = function(index){
            obj.props.cartAdd(index);
        };
        let itemsList = items.map(function(item){
            return <Col key={item.id}>
                <div className="panel panel-primary">
                    <div className="panel-body"><img src={item.picture}
                                                     className="img-responsive food-image" alt="Image" /></div>
                    <div className="meal-name"><p>{item.name}</p></div>
                    <div className="meal-price">
                        <ul>
                            <li className="list-meal"><p>{item.price} Kč</p></li>
                            <li className="list-meal">
                                <Button variant="danger"
                                        type="button"
                                        disabled={!obj.props.active}
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
        var renderer = [];
        var tmpItems = [];
        this.props.food.map((item, index) => {
            tmpItems.push(item);
            if ( index % 3 === 2 ) {
                renderer.push(
                    this.makeCol(tmpItems, obj));
                tmpItems = [];
            }
        });
        if ( tmpItems . length > 0 )
            renderer.push(
                this.makeCol(tmpItems, obj));
        return renderer;
    }
    render() {
        return (
            <Container id="MenuContainer">
                <div className="menu-header"><p>Dnes 22.4.2019 se {this.props.canteenName } se podávají tato jídla</p></div>
                {this.foods(this)}
            </Container>
        );
    }
}