import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer/Footer'
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'
import {steaGet} from "../services/ApiResource";
import {steaPost} from "../services/ApiResource";
import {isAuthenticated} from "../services/ApiResource";

/**
 * class for big basket /kosik
 */
export default class Delivery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deliveries: [],
            hasLoaded: false
        };
    }

    /**
     * loads all the deliveries to this.state
     */
    loadOrders(){
        let url = "/order";
        steaGet(url)
            .then(results => {
                this.setState({deliveries: results.data});
                this.setState({hasLoaded: true});
            });
    }

    /**
     * generates content for the main div on the website
     * @returns {any[]} content
     */
    generateContent(){
        const acceptDelivery = function(index){
            let url = "/order/" + index + "/accept";
            let data = {id: index};
            steaPost(url, data)
        };
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
         * generates table filled with deliveries
         * @type {any[]}
         */
        return this.state.deliveries.map(function(item, index){
            if ( item.orderState === "PLACED" ) {
                return <tr>
                    <td>{index + 1}</td>
                    <td>{item.menu.canteen.name}</td>
                    <td>{loadFood(item.food)}</td>
                    <td>{item.menu.canteen.address}</td>
                    <td>{item.note}</td>
                    <td>{item.deliveryTime}</td>
                    <td><Button variant="danger"
                                type="button"
                                key={item.id}
                                onClick={() => acceptDelivery(item.id)}
                    >+</Button></td>
                </tr>
            }
        });
    }

    /**
     * initializes table and its header than calls generateContent method
     * @returns {*}
     */
    showDeliveries(){
        if(this.state.hasLoaded && isAuthenticated()){
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
                        <th>Přijmout objednávku</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.generateContent()}
                    </tbody>
                </Table>
            )
        } else {
            return (
                <h1>Please log in to view the deliveries</h1>
            )
        }
    }

    render() {
        return (
        <div id="Delivery">
                { ! this.state.hasLoaded && isAuthenticated() && this.loadOrders()}
                <Navigation/>
                <Header/>
                { this.showDeliveries() }
            <Footer/>
            </div>
        );
    }
}