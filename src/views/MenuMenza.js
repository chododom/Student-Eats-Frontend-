import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import RightContainer from "../components/RightContainer";
import MenuContainer from "../components/MenuContainer";
import {steaGet} from "../services/ApiResource.js";
import { connect } from 'react-redux'
import {addFood} from "../actions/basket_actions";


class MenuMenza extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [],
            canteenId: 0,
            canteenName: ""
        };

    }

    componentDidMount(){
        this.getCanteenId(this.getItems);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.location.pathname !== this.props.location.pathname){
            this.getCanteenId(this.getItems);
        }
    }

    getCanteenId(callback){
        let url = '/canteen';
        steaGet(url)
            .then(results => console.log("Canteen", results));

        switch (this.props.location.pathname) {
            case "/technicka_menza":
                this.setState({canteenId: 4}, callback);
                this.setState({canteenName: "v Technické menze"});
                break;
            case "/masarykova_kolej":
                this.setState({canteenId: 1}, callback);
                this.setState({canteenName: "na Masasrykově koleji"});
                break;
            case "/studentsky_dum":
                this.setState({canteenId: 2}, callback);
                this.setState({canteenName: "ve Studentském domě"});
                break;
            case "/pizzeria_LaFontanella":
                this.setState({canteenId: 3}, callback);
                this.setState({canteenName: "v Pizzerii LaFontannella"});
                break;
        }
    }

    getItems(){
        let url = '/canteen/' + this.state.canteenId + '/menu';
        steaGet(url)
            .then(results => this.setState({'items': results.data.food}))
            .then(() => this.setState({'isLoading': false}))

    }

    addItemToCart = (index) => {
        let selected = this.state.items.filter((item)=>{
            return item.id === index;
        })[0];
        this.props.addFood(selected, this.state.canteenId);
    };

    canFoodBeSelected(){
        return this.props.basket.chosenCanteen == null || this.props.basket.chosenCanteen === this.state.canteenId
    }

    render(){
        if (!this.state.isLoading && this.state.items !== undefined){
            return (
                <div>
                    <Navigation />
                    <Header/>
                    <MenuContainer food={this.state.items} cartAdd={this.addItemToCart}  canteenName={this.state.canteenName} active={this.canFoodBeSelected()}/>
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
        addFood: (food, canteen) => {dispatch(addFood(food, canteen))}
    })
}

function mapStateToProps(state){
    return ({basket: state.basket})
}

MenuMenza = connect(mapStateToProps, mapDispatchToProps)(MenuMenza);
export default MenuMenza;