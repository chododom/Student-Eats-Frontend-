import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css'

export default class Profile extends Component{
    constructor(props) {
        console.log("Profile constructor");
        super(props);
        this.state = {
            userId: parseInt(this.props.userId),
            dataSet: false,
            userData: null
        };
    }
    getData(){
        console.log("Id");
        console.log(this.state.userId);
        if ( this.state.userId > 0 && ! this.state.dataSet){
            var url = "https://private-9dc2d6-studenteats.apiary-mock.com/user/" + this.state.userId;
            fetch(url)
                .then(results => results.json())
                .then(results => this.setState({userData: results}))
                .then(results => this.setState({'dataSet': true}))
        }
        console.log(this.state.userData);
    }
    generateData(){
        if (this.state.userData == null)
            return <p>No user data</p>;
        return <div>
            <p><strong>Jméno:</strong> {this.state.userData.name}</p>
            <p><strong>Přijmení:</strong> {this.state.userData.surname}</p>
            <p><strong>Username:</strong> {this.state.userData.username}</p>
        </div>
    }

    handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("userId",undefined);
        window.location.reload();
    }

    render() {
        return (
            <div id="Profile">
            <Row>
                {! this.state.dataSet && this.getData()}
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