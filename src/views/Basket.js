import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightContainer from "../components/RightContainer/RightContainer";
import Footer from '../components/Footer/Footer'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux'
import {steaGet, steaPost} from "../services/ApiResource";
import DateTime from 'react-datetime/DateTime';
import Alert from "react-bootstrap/Alert";
import {removeAll} from "../actions/basket_actions";

/**
 * component for the big basket /kosik
 */
class Basket extends Component{

    constructor(props){
        super(props);
        let foodIds = props.basket.map((item) => { return item.food.id});
        // this.getFoodInOrder = this.getFoodInOrder.bind(this);
        this.state = {
            success: false,
            error: false,
            buildings: [],
            rooms: [],
            foods: props.basket,
            foodIds: foodIds,
            name: "",
            surname: "",
            telnumber: "",
            adress: "",
            building: "",
            room:"",
            note: "",
            time: Date()
        };
    }

    /**
     * handles change for attributes in the form
     * @param event
     */
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    /**
     * outputs the cart with title, price and picture of the given food
     * @returns {*}
     */
    getFoodInOrder(){
        return this.state.foods.map((item) => {
            let food = item.food;
            console.log(food);
            return (
                <Col>
                    <Row>
                        <div>{food.name}</div>
                        <div><img src={food.picture} alt={food.name} width={200}/></div>
                        <div>{food.price} Kč</div>
                    </Row>
                </Col>
            )
        })
    }

    /**
     * outputs success message during the proper time
     * @returns {*}
     */
    successMessage(){
        if ( this.state.success ){
            return (
                <Alert variant="success">
                    <Alert.Heading>Objednávka úspěšně zadána</Alert.Heading>
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
                    <Alert.Heading>Chyba při objednávce, prosím vyplněte všechna povinná pole označená *</Alert.Heading>
                </Alert>
            )
        }
    }

    /**
     * submits form and creates order
     * @param event
     */
    submit = event => {
        this.setState({error: false});
        this.setState({success: false});
        event.preventDefault();
        let order = {
            note: this.state.note,
            foods: this.state.foodIds,
            room: this.state.room,
            menu: "52", //todo - change this to non constant value
            deliveryTime: this.state.time.format()
        };
        steaPost("/order", order).then(
            () => {
                this.props.removeAll();
                this.setState({success: true});

        },
        (error) => {
                console.log(error);
                this.setState({error: true});
        }
        );
    };

    /**
     * generates options for select parameter from this.state.buildings
     * @returns {*[]}
     */
    generateBuildingOptions(){
        return this.state.buildings.map((item) => {
            return (<option value={item.id}>{item.designation}</option>)
        })
    }

    /**
     * generates options for select parameter from this.state.rooms
     * @returns {*[]}
     */
    generateRoomOptions(){
        return this.state.rooms.map((item) => {
            return (<option value={item.id}>{item.designation}</option>)
        })
    }

    /**
     * loads data to this.state.buildings and this.state.rooms
     */
    componentDidMount() {
        steaGet("/building")
            .then(results => {
                this.setState({buildings: results.data})
            });
        steaGet("/room")
            .then(results => {
                this.setState({rooms: results.data});
                console.log(results)
            });
    }

    render() {
        const obj = this;
        /**
         * handles and sets date to the state machine
         * @param date - date input from user
         */
        const handleDate2 = function(date){
            obj.setState({time: date})
        };

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
                                <Form.Label>*Budova:</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={this.state.building}
                                    onChange={this.handleChange}
                                    placeholder="Zadejte budovu">
                                    <option value={0}>Vyber budovu</option>
                                    {this.generateBuildingOptions()}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="room">
                                <Form.Label>*Místnost:</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={this.state.room}
                                    onChange={this.handleChange}
                                    placeholder="Specifikujte místnost v budově">
                                    <option value={0}>Vyber místnost</option>
                                    {this.generateRoomOptions()}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="note">
                                <Form.Label>Poznámka:</Form.Label>
                                <Form.Control
                                    value={this.state.note}
                                    onChange={this.handleChange}
                                    placeholder="Zadejte poznámku k objednávce" />
                            </Form.Group>
                            <Form.Group controlId="deliveryTIme">
                                <Form.Label>*Čas doručení:</Form.Label>
                                <DateTime onChange={handleDate2} />
                            </Form.Group>
                            <Button
                                onClick={this.submit}
                                variant="danger"
                                type="submit">
                                Objednat</Button>
                        </Form>
                    </Col>
                </Row>
                {this.errorMessage()}
                {this.successMessage()}
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state){
return ({basket: state.basket})
}

function mapDispatchToProps(dispatch){
    return({
        removeAll: () => {dispatch(removeAll())}
    })
}

Basket = connect(mapStateToProps, mapDispatchToProps)(Basket);
export default Basket;