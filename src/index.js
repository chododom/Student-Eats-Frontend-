import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/';
import * as serviceWorker from './serviceWorker';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from 'react-bootstrap/Jumbotron';
import HomePage from "./components/HomePage";

ReactDOM.render(
 <HomePage/>
,
document.getElementById('root'));
