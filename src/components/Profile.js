import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css'
import {steaGet} from "../services/ApiResource.js";


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            userId: parseInt(this.props.userId),
            dataSet: false,
            userData: null
        };
    }

    /**
     * loads data for a logged-in user
     */
    getData() {
        let url = "/user/" + localStorage.getItem("username");
        steaGet(url)
            .then(results => this.setState({userData: results.data}))
            .then(results => this.setState({dataSet: true}));
    }

    /**
     * loads personal data from userData storage initialized by getData method
     * @returns {*}
     */
    generateData() {
        if (this.state.userData == null)
            return <p>No user data</p>;
        return <div>
            <p><strong>Jméno:</strong> {this.state.userData.name}</p>
            <p><strong>Přijmení:</strong> {this.state.userData.surname}</p>
            <p><strong>Username:</strong> {this.state.userData.username}</p>
        </div>
    }

    /**
     * handles log out button
     */
    handleSubmit = (event) => {
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