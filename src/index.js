import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Footer/Footer.css'
import './components/Cart/Cart.css'
import './components/myNavBar.css'

import 'react-bootstrap/';
import HomePage from "./views/HomePage";
import MenuMenza from "./views/MenuMenza";
import ErrorURL from './views/ErrorURL.js'
import Donaska from "./views/Donaska";
import Registration from "./components/Registration"
import Basket from './components/Basket'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import steaApp from "./reducers/reducers";
import {loadState, saveState} from "./localStorage";

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
                <Route path="/donaska" component={Donaska}/>
                <Route path="/kosik" component={Basket}/>
                <Route path="/registrace" component={Registration}/>
                <Route component={ErrorURL}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
