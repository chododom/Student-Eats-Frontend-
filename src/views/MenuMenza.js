import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import RightContainer from "../components/RightContainer/RightContainer";
import MenuContainer from "../components/MenuContainer/MenuContainer";
import {steaGet} from "../services/ApiResource.js";
import { connect } from 'react-redux'
import {addFood} from "../actions/basket_actions";

/**
 * component is shown on all the menu URLs (eg. /technicka_menza)
 */
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

    /**
     * switch for the menza ids and names
     * @param callback
     */
    getCanteenId(callback){
        switch (this.props.location.pathname) {
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
            case "/technicka_menza":
                this.setState({canteenId: 4}, callback);
                this.setState({canteenName: "v Technické menze"});
                break;
        }
    }

    /**
     * loads and saves the current menu of the specific caneen
     */
    getItems(){
        let url = '/canteen/' + this.state.canteenId + '/menu';
        steaGet(url)
            .then(results => this.setState({'items': results.data.food}))
            .then(() => this.setState({'isLoading': false}))

    }

    /**
     * callback function called from the MenuContainer component
     * @param index - food ID that is to be added to the cart
     */
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
                    <MenuContainer food={this.state.items} cartAdd={this.addItemToCart}  canteenName={this.state.canteenName} />
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
    return state
}

MenuMenza = connect(mapStateToProps, mapDispatchToProps)(MenuMenza);
export default MenuMenza;