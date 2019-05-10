import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css'
import {steaGet} from "../services/ApiResource.js";


export default class Profile extends Component {

    constructor(props) {
        // console.log("Profile constructor");
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            userId: parseInt(this.props.userId),
            dataSet: false,
            userData: null
        };
    }

    getData() {
        /**
         *  loads data for a logged-in user
         */
        // console.log("Username", localStorage.getItem("username"));
        // console.log("Token", localStorage.getItem("token"));
        let url = "/user/" + localStorage.getItem("username");
        // console.log(url);
        steaGet(url)
            .then(results => this.setState({userData: results.data}))
            .then(results => this.setState({dataSet: true}));
        // console.log(this.state.dataSet);
    }

    generateData() {
        /**
         * loads personal data from userData storage initialized by getData method
         */
        if (this.state.userData == null)
            return <p>No user data</p>;
        return <div>
            <p><strong>Jméno:</strong> {this.state.userData.name}</p>
            <p><strong>Přijmení:</strong> {this.state.userData.surname}</p>
            <p><strong>Username:</strong> {this.state.userData.username}</p>
        </div>
    }

    handleSubmit = (event) => {
        /**
         * handles log out button
         */
        event.preventDefault();
        this.setState({dataSet: false});
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        this.props.logoutHandler();
    };

    render() {
        return (
            <div id="Profile">
                <Row>
                    {!this.state.dataSet && this.getData()}
                    <Col>
                        <div className="contright-header"><p>Profil</p>
                            <Button
                                type="button"
                                onClick={this.handleSubmit}
                            >Odhlásit se</Button>
                            {this.state.dataSet && this.generateData()}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}