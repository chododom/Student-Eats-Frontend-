import React, { Component } from 'react';
import MyApp from "./MyApp";

export default class Header extends Component{
    render() {
        return (
            <div className="jumbotron">
                <div className="container text-center">
                    <h1>Student Eats</h1>
                    <p>Eat, feed & starve</p>
                    <MyApp />
                </div>
            </div>
        );
    }
}
