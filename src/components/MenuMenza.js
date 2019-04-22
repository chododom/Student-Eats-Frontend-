import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import RightContainer from "./RightContainer";
import MenuContainer from "./MenuContainer";

export default class MenuMenza extends Component{
    render() {
        return (
            <div>
            <Navigation />
            <Header/>
            <MenuContainer/>
            <RightContainer/>
            <Footer/>
            </div>
        );
    }
}