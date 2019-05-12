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
export default class MyDeliveries extends Component{
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
    loadDeliveries(){
        let url = "/user/" + localStorage.getItem("username") +"/accepted";
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
        let component = this;
        const finishDelivery = function(index){
            let url = "/order/" + index + "/confirm";
            let data = {id: index};
            steaPost(url, data)
                .then(() => {
                    component.setState({hasLoaded: true});
                    component.loadDeliveries();
            });
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
     * initializes table and its header than calls generateContent method
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
                    {this.generateContent()}
                    </tbody>
                </Table>
            )
        } else {
            return (
                <h2>Please log in to view the deliveries</h2>
            )
        }
    }

    render() {
        return (
            <div id="Delivery">
                { ! this.state.hasLoaded && isAuthenticated() && this.loadDeliveries()}
                <Navigation/>
                <Header/>
                <h1>Moje donášky</h1>
                { this.showDeliveries() }
                <Footer/>
            </div>
        );
    }
}