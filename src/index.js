import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Footer.css'
import './components/myNavBar.css'

import 'react-bootstrap/';
import * as serviceWorker from './serviceWorker';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from 'react-bootstrap/Jumbotron';
import HomePage from "./components/HomePage";
import MenuMenza from "./components/MenuMenza";

ReactDOM.render(
    <BrowserRouter>
    <MenuMenza/>
    </BrowserRouter>
,
document.getElementById('root'));
