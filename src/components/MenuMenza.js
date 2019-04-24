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
        console.log(this.props.location.pathname);
        this.state = {
            isLoading: true,
            items: []
        };
    }
    componentDidMount(){
        this.getItems();
    }
    getItems(){
        fetch(url)
            .then(results => results.json())
            .then(results => this.setState({'items': results.food}))
            .then(results => this.setState({'isLoading': false}))
    }
    addItemToCart = (index) => {
        console.log(index);
        console.log(localStorage.getItem("userId"));
        // todo - add items to cart
    };
    render(){
        return (
            <div>
            <Navigation />
            <Header/>
                {!this.state.isLoading && <MenuContainer food={this.state.items} cartAdd={this.addItemToCart}/>}
            <RightContainer/>
            <Footer/>
            </div>
        );
    }
}
