import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Footer.css'
import './components/myNavBar.css'

import 'react-bootstrap/';
import HomePage from "./components/HomePage";
import MenuMenza from "./components/MenuMenza";
import ErrorURL from './components/ErrorURL.js'
import Donaska from "./components/Donaska";
import Registration from "./components/Registration"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/technicka_menza" component={MenuMenza} />
            <Route path="/masarykova_kolej" component={MenuMenza} />
            <Route path="/studentsky_dum" component={MenuMenza} />
            <Route path="/pizzeria_LaFontanella" component={MenuMenza} />
            <Route path="/donaska" component={Donaska}/>
            <Route path="/kosik" component={Donaska}/>
            <Route path="/registrace" component={Registration}/>
            <Route component={ErrorURL} />
        </Switch>
    </BrowserRouter>
,
document.getElementById('root'));
