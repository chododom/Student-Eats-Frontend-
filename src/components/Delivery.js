import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightContainer from "./RightContainer";
import Footer from './Footer/Footer'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'

import {steaGet} from "../services/ApiResource";
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

    loadOrders(){
        let url = "/order";
        steaGet(url)
            .then(results => {
                this.setState({deliveries: results.data});
                this.setState({hasLoaded: true});
                console.log(this.state.deliveries)
            });
    }
    //
    // loadFood(foodList){
    //     console.log(foodList);
    //     // let out = foodList.map(function (item, index) {
    //     //      " "
    //     // });
    //     // return out
    // }

    generateContent(){
        const acceptDelivery = function(index){
            console.log(index)

        };
        const loadFood = function(foodList){
            let out = foodList.map(function (item, index) {
                return " "
            });
            return out
        };
        let itemsList = this.state.deliveries.map(function(item, index){
            console.log(item);
            if ( item.orderState === "ACCEPTED" ) { // todo - change to PLACED
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
        return itemsList
    }

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