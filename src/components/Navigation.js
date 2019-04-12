import React, { Component } from 'react';
import MyApp from "./MyApp";

export default class Navigation extends Component{
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active">><a href="#">Objednávka</a></li>
                            <li><a href="#">Donáška</a></li>
                            <li><a href="#">Profil</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Košík</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
