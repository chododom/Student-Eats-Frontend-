import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import RightContainer from "./RightContainer";
import MenuContainer from "./MenuContainer";
import axios from "axios";

const url = 'https://private-9dc2d6-studenteats.apiary-mock.com/canteen/1/menu'; // from api-ari - mock data

export default class MenuMenza extends Component{
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: true,
            error: null,
            items: []
        };
    }
    componentDidMount(){
        this.getItems();
        console.log("something");
        //this.setState({isLoading: false});
        /*axios.get(url,
            {
                headers: {
                    'Access-Control-Allow-Origin': "true"
                }
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data.food);
                this.setState({foodItems: response.data.food});
                //this.state.foodItems = response.data.food;
                //this.state.isLoading = false;
                    response.data.food.map((item, index) => {
                    console.log("Item: ");
                    console.log(item);
                    console.log("Index: ");
                    console.log(index);
                });
                return response
            })
            .catch(function (error) {
                console.log("something baaaad");
                console.log(error);
            });*/
    }
    getItems(){
        fetch(url)
            .then(results => results.json())
            .then(results => this.setState({'items': results.food}))
            .then(results => this.setState({'isLoading': false}))
    }
    render(){
        return (
            <div>
            <Navigation />
            <Header/>
                {!this.state.isLoading && <MenuContainer food={this.state.items}/>}
            <RightContainer/>
            <Footer/>
            </div>
        );
    }
}
