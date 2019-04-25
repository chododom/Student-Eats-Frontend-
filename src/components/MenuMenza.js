import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import RightContainer from "./RightContainer";
import MenuContainer from "./MenuContainer";
import {steaGet} from "../services/ApiResource.js";


export default class MenuMenza extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.location.pathname);
        this.state = {
            isLoading: true,
            items: [],
            canteenId: 0,
            canteenName: ""
        };

    }
    getCanteenId(callback){

        switch (this.props.location.pathname) {
            case "/technicka_menza":
                this.setState({canteenId: 1}, callback);
                this.setState({canteenName: "Technická menza"}, callback);
                break;
            case "/masarykova_kolej":
                this.setState({canteenId: 2}, callback);
                this.setState({canteenName: "Masarykova kolej"}, callback);
                break;
            case "/studentsky_dum":
                this.setState({canteenId: 3}, callback);
                this.setState({canteenName: "Studentský dům"}, callback);
                break;
            case "/pizzeria_LaFontanella":
                this.setState({canteenId: 4}, callback);
                this.setState({canteenName: "Pizzerie LaFontanella"}, callback);
                break;
        }
    }

    componentDidMount(){
        this.getCanteenId(this.getItems);
    }
    getItems(){
        var url = '/canteen/' + this.state.canteenId + '/menu';
        steaGet(url)
            // .then(results => results)
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
                    <MenuContainer food={this.state.items} cartAdd={this.addItemToCart} canteenName={this.state.canteenName}/>
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
