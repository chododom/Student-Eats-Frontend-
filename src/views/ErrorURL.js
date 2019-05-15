import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * default screen representing undefined URLs
 */
export default class Header extends Component{
    render() {
        return (
            <Jumbotron>
                <h1>This URL does not exist</h1>
            </Jumbotron>
        );
    }
}