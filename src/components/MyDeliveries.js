import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer'
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'
import {steaGet} from "../services/ApiResource";
import {steaPost} from "../services/ApiResource";
import {isAuthenticated} from "../services/ApiResource";

/**
 * class for big basket /kosik
 */
export default class MyDeliveries extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deliveries: [],
            orders: [],
            hasLoaded: false
        };
    }

    /**
     * loads all the deliveries to this.state
     */
    loadDeliveries(){
        let url = "/user/" + localStorage.getItem("username") +"/accepted";
        steaGet(url)
            .then(results => {
                this.setState({deliveries: results.data});
                this.setState({hasLoaded: true});
            });
        url = "/user/" + localStorage.getItem("username") +"/accepted"; //todo - change this to the new endpoint - should work after
        steaGet(url)
            .then(results => {
                console.log(results);
                this.setState({orders: results.data});
                this.setState({hasLoaded: true});
            });
    }

    /**
     * generates content for the main div on the website
     * @returns {any[]} content
     */
    generateDeliveries(){
        let component = this;
        /**
         * handles a request when user confirms that the delivery has been finished
         * @param index
         */
        const finishDelivery = function(index){
            let url = "/order/" + index + "/confirm";
            let data = {id: index};
            steaPost(url, data)
                .then(() => {
                    component.setState({hasLoaded: true});
                    component.loadDeliveries();
            });
        };
        /**
         * loads a food from json to string and outputs it to the table
         * @param foodList - an array of food items
         * @returns {*}
         */
        const loadFood = function(foodList){
            return foodList.map(function (item, index) {
                return (
                    <span>
                        {index + 1}. {item.name}
                        <br />
                    </span>
                )
            });
        };
        /**
         * checks whether the delivery has been finished and outputs a proper message
         * @param courierConfirmed - true or false from json
         * @returns {string}
         */
        const deliveryFinished = function (courierConfirmed) {
            if ( courierConfirmed )
                return "Dokončena";
            else
                return "Nedokončena";
        };

        /**
         * generates table filled with deliveries
         * @type {any[]}
         */
        return this.state.deliveries.map(function(item, index){
                return <tr>
                    <td>{index + 1}</td>
                    <td>{item.menu.canteen.name}</td>
                    <td>{loadFood(item.food)}</td>
                    <td>{item.menu.canteen.address}</td>
                    <td>{item.note}</td>
                    <td>{item.deliveryTime}</td>
                    <td>{deliveryFinished(item.courierConfirmed)}</td>
                    <td><Button variant="danger"
                                type="button"
                                key={item.id}
                                onClick={() => finishDelivery(item.id)}
                    >Dokončit</Button></td>
                </tr>
        });
    }

    /**
     * generates the body of the table, all the <td>s
     * @returns {*[]}
     */
    generateOrders(){
        let component = this;
        /**
         * handles a request when user confirms that the order has been accepted and finished
         * @param index
         */
        const finishOrder = function(index){
            let url = "/order/" + index + "/confirm";
            let data = {id: index};
            steaPost(url, data)
                .then(() => {
                    component.setState({hasLoaded: true});
                    component.loadDeliveries();
                });
        };
        /**
         * loads a food from json to string and outputs it to the table
         * @param foodList - an array of food items
         * @returns {*}
         */
        const loadFood = function(foodList){
            return foodList.map(function (item, index) {
                return (
                    <span>
                        {index + 1}. {item.name}
                        <br />
                    </span>
                )
            });
        };
        /**
         * checks whether the delivery has been finished and outputs a proper message
         * @param courierConfirmed - true or false from json
         * @returns {string}
         */
        const deliveryFinished = function (courierConfirmed) {
            if ( courierConfirmed )
                return "Potvrzena";
            else
                return "Nepotvrzena";
        };

        /**
         * generates table filled with deliveries
         * @type {any[]}
         */
        return this.state.deliveries.map(function(item, index){
            return <tr>
                <td>{index + 1}</td>
                <td>{item.menu.canteen.name}</td>
                <td>{loadFood(item.food)}</td>
                <td>{item.menu.canteen.address}</td>
                <td>{item.note}</td>
                <td>{item.deliveryTime}</td>
                <td>{deliveryFinished(item.courierConfirmed)}</td>
                <td><Button variant="danger"
                            type="button"
                            key={item.id}
                            onClick={() => finishOrder(item.id)}
                >Dokončit</Button></td>
            </tr>
        });
    }

    /**
     * initializes table and its header than calls generateDeliveries method
     * @returns {*}
     */
    showDeliveries(){
        if(isAuthenticated()){
            return (
                <Table responsive="lg">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Menza</th>
                        <th>Jídlo</th>
                        <th>Adresa</th>
                        <th>Poznámka</th>
                        <th>Čas doručení</th>
                        <th>Objednávka dokončena</th>
                        <th>Dokončit objednávku</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.generateDeliveries()}
                    </tbody>
                </Table>
            )
        } else {
            return (
                <h2>Please log in to view the deliveries</h2>
            )
        }
    }

    /**
     * initializes table and its header than calls generateOrders method
     * @returns {*}
     */
    showOrders(){
        if(isAuthenticated()){
            return (
                <Table responsive="lg">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Menza</th>
                        <th>Jídlo</th>
                        <th>Adresa</th>
                        <th>Poznámka</th>
                        <th>Čas doručení</th>
                        <th>Potvrzena kurýrem</th>
                        <th>Dokončit objednávku</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.generateOrders()}
                    </tbody>
                </Table>
            )
        }
    }

    render() {
        return (
            <div id="Delivery">
                { ! this.state.hasLoaded && isAuthenticated() && this.loadDeliveries()}
                <Navigation/>
                <Header/>
                <h1>Moje objednávky</h1>
                { this.showOrders() }
                <h1>Moje donášky</h1>
                { this.showDeliveries() }
                <Footer/>
            </div>
        );
    }
}