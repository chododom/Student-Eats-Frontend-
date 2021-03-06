import React, { Component } from 'react';
import Header from '../../PresentationLayer/components/Header/Header';
import Navigation from '../../PresentationLayer/components/Navigation/Navigation';
import Footer from '../../PresentationLayer/components/Footer/Footer'
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'
import {steaGet} from "../../BussinessLayer/services/ApiResource";
import {steaPost} from "../../BussinessLayer/services/ApiResource";
import {isAuthenticated} from "../../BussinessLayer/services/ApiResource";
import Alert from 'react-bootstrap/Alert'


/**
 * component representing and showing all the delivery possibilities which can be accepted by the courier
 * component is shown on this URL - /donaska
 */
export default class Delivery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            succes: false,
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
        let component = this;

        /**
         * handles a button when user decides which order he wants to accept
         * @param index
         */
        const acceptDelivery = function(index){
            let url = "/order/" + index + "/accept";
            let data = {id: index};
            steaPost(url, data)
                .then(() => {
                    component.setState({hasLoaded: true});
                    component.setState({success: true});
                    component.setState({error: false});
                    component.loadOrders();
                })
                .catch(() =>{
                    component.setState({success: false});
                    component.setState({error: true});
                })
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
            } else
                return ""
        });
    }

    /**
     * outputs error message during the proper time
     * @returns {*}
     */
    errorMessage(){
        if ( this.state.error ){
            return (
                <Alert variant="danger">
                    <Alert.Heading>Nelze přijmout objednávku, kterou jste sám zadal</Alert.Heading>
                </Alert>
            )
        }
    }

    /**
     * outputs success message during the proper time
     * @returns {*}
     */
    successMessage(){
        if ( this.state.success ){
            return (
                <Alert variant="primary">
                    <Alert.Heading>Objednávka byla přijata</Alert.Heading>
                </Alert>
            )
        }
    }

    /**
     * initializes table and its header than calls generateDeliveries method
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
            {this.errorMessage()}
            {this.successMessage()}
            {this.showDeliveries()}
            {this.errorMessage()}
            {this.successMessage()}
            <Footer/>
        </div>
        );
    }
}