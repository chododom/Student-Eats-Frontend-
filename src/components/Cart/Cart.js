import React, {Component} from 'react';
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import Food from "../Food";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={"Cart"}>
                <Row>
                    <Col>
                        <p>Košík</p>
                        <ul>
                            {this.props.basket.map((food) => {
                                return (<li><Food food={food.food}/></li>)
                            })}
                        </ul>
                        <b>{this.props.basket.reduce((accumulator, currentValue) => {return accumulator + currentValue.food.price}, 0)} Kč</b>
                        <NavLink to="/kosik" className={"btn btn-secondary"}>Přejít k objednávce</NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({basket: state.basket})
}

Cart = connect(mapStateToProps)(Cart);
export default Cart;