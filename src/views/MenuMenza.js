import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation";
import RightContainer from "../components/RightContainer";
import MenuContainer from "../components/MenuContainer";
import {steaGet} from "../services/ApiResource.js";
import { connect } from 'react-redux'
import {ADD_FOOD, addFood} from "../actions/basket_actions";


class MenuMenza extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [],
            canteenId: 0
        };

    }
    getCanteenId(callback){
        let url = '/canteen';
        steaGet(url)
            .then(results => console.log("Canteen", results))

        switch (this.props.location.pathname) {
            case "/technicka_menza":
                this.setState({canteenId: 4}, callback);
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location.pathname !== this.props.location.pathname){
            this.getCanteenId(this.getItems);
        }
    }

    getItems(){
        let url = '/canteen/' + this.state.canteenId + '/menu';
        steaGet(url)
            .then(results => this.setState({'items': results.data.food}))
            .then(results => this.setState({'isLoading': false}))

    }
    addItemToCart = (index) => {
        let selected = this.state.items.filter((item)=>{
            return item.id === index;
        })[0];
        this.props.addFood(selected);
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
        } else{
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

function mapDispatchToProps(dispatch){
    return({
        addFood: (payload) => {dispatch(addFood(payload))}
    })
}

function mapStateToProps(state){
    console.log(state)
    return state
}

MenuMenza = connect(mapStateToProps, mapDispatchToProps)(MenuMenza);
export default MenuMenza;