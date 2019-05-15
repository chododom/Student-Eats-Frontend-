import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * MenuContainer takes care of showing the actual food items given from MenuContainer in props
 * expects following props:
 *      - food - list of food items which are to be shown
 *      - cartAdd - callback function which adds food items to the cart
 *      - canteenName - used for better user experience
 */
export default class MenuContainer extends Component{
    constructor(props) {
        super(props);
        var date = new Date();
        this.state = {
            isLoading: false,
            foodItems: [],
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    /**
     * creates a row of 3 cols from food list given in the parameter
     * @param items - list of food items
     * @param obj - object for the button add handler
     * @returns {*} a Row of 3 Cols
     */
    makeRow(items, obj){
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

    /**
     * method that generates food items from props.food to the component
     * @param obj - object with the props.food parameter
     * @returns {Array} - array of Rows
     */
    foods(obj){
        let renderer = [];
        let tmpItems = [];
        this.props.food.map((item, index) => {
            tmpItems.push(item);
            if ( index % 3 === 2 ) {
                renderer.push(
                    this.makeRow(tmpItems, obj));
                tmpItems = [];
            }
        });
        if ( tmpItems . length > 0 )
            renderer.push(
                this.makeRow(tmpItems, obj));
        return renderer;
    }
    render() {
        return (
            <Container id="MenuContainer">
                <div className="menu-header"><p>Dnes {this.state.day}.{this.state.month}.{this.state.year} se {this.props.canteenName } se podávají tato jídla</p></div>
                {this.foods(this)}
            </Container>
        );
    }
}