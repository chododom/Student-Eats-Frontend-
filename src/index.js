import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PresentationLayer/components/Footer/Footer.css'
import './PresentationLayer/components/RightContainer/Cart/Cart.css'
import './PresentationLayer/components/Navigation/myNavBar.css'

import 'react-bootstrap/';
import HomePage from "./PresentationLayer/views/HomePage";
import MenuMenza from "./PresentationLayer/views/MenuMenza";
import ErrorURL from './PresentationLayer/views/ErrorURL.js'
import Registration from "./PresentationLayer/views/Registration"
import Basket from './PresentationLayer/views/Basket'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import steaApp from "./BussinessLayer/reducers/reducers";
import {loadState, saveState} from "./BussinessLayer/localStorage";
import Delivery from './PresentationLayer/views/Delivery'
import MyDeliveries from './PresentationLayer/views/MyDeliveries'
const persistedState = loadState();
const store = createStore(steaApp, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
   saveState({
       basket: store.getState().basket
   })
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/technicka_menza" component={MenuMenza}/>
                <Route path="/masarykova_kolej" component={MenuMenza}/>
                <Route path="/studentsky_dum" component={MenuMenza}/>
                <Route path="/pizzeria_LaFontanella" component={MenuMenza}/>
                <Route path="/donaska" component={Delivery}/>
                <Route path="/kosik" component={Basket}/>
                <Route path="/moje_donasky" component={MyDeliveries}/>
                <Route path="/registrace" component={Registration}/>
                <Route component={ErrorURL}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
