import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation";
import RightContainer from "../components/RightContainer";
import MenuContainer from "../components/MenuContainer";
import {steaGet} from "../services/ApiResource.js";


export default class MenuMenza extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.location.pathname);
        this.state = {
            isLoading: true,
            items: [],
            canteenId: 0
        };

    }
    getCanteenId(callback){

        switch (this.props.location.pathname) {
            case "/technicka_menza":
                this.setState({canteenId: 0}, callback);
                break;
            case "/masarykova_kolej":
                this.setState({canteenId: 1}, callback);
                break;
            case "/studentsky_dum":
                this.setState({canteenId: 2}, callback);
                break;
            case "/pizzeria_LaFontanella":
                this.setState({canteenId: 3}, callback);
                break;
        }
    }

    componentDidMount(){
        this.getCanteenId(this.getItems);
    }
    getItems(){
        var url = '/canteen/' + this.state.canteenId + '/menu';
        steaGet(url)
            .then(results => this.setState({'items': results.data.food}))
            .then(results => this.setState({'isLoading': false}))

    }
    addItemToCart = (index) => {
        console.log(index);
        console.log(localStorage.getItem("userId"));
        // todo - add items to cart
    };
    render(){
        if (!this.state.isLoading && this.state.items !== undefined){
            return (
                <div>
                    <Navigation />
                    <Header/>
                    <MenuContainer food={this.state.items} cartAdd={this.addItemToCart}/>
                    <RightContainer/>
                    <Footer/>
                </div>
            );
        }else{
            return (
                <div>
                    <Navigation />
                    <Header/>
                    Loading...
                    <RightContainer/>
                    <Footer/>
                </div>
            );
        }

    }
}