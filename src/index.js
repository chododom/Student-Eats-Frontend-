import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    BrowserRouter,
    Switch
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
import ErrorURL from './components/ErrorURL.js'

// todo - delete this
const NewRoute = () => {
    return (
        <div>
            <p>My Route</p>
            </div>
    )
}
// todo - replace the "/new" URL and the component NewRoute with something relevant
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MenuMenza} exact />
            <Route path="/new" component={NewRoute} />
            <Route component={ErrorURL} />
        </Switch>
    </BrowserRouter>
,
document.getElementById('root'));
