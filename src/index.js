import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './stea.png';


ReactDOM.render(
    <div>
        <div className="jumbotron">
            <div className="container text-center">
                <h1>Student Eats</h1>
                <p>Eat, feed & starve</p>
            </div>
        </div>

        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Logo</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active">><a href="#">Objednávka</a></li>
                        <li><a href="#">Donáška</a></li>
                        <li><a href="#">Profil</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Košík</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Technická menza</div>
                        <div className="panel-body"><img src={logo}
                                                         className="img-responsive" alt="Image" />  </div>
                        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="panel panel-danger">
                        <div className="panel-heading">Studentský dům</div>
                        <div className="panel-body"><img src={logo}
                                                         className="img-responsive"  alt="Image" /></div>
                        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="panel panel-success">
                        <div className="panel-heading">Masarykova jídelna</div>
                        <div className="panel-body"><img src={logo}
                                                         className="img-responsive" alt="Image" /></div>
                        <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-primary">
                            <div className="panel-heading">BLACK FRIDAY DEAL</div>
                            <div className="panel-body"><img src={logo}
                                                             className="img-responsive" alt="Image" />
                            </div>
                            <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-primary">
                            <div className="panel-heading">BLACK FRIDAY DEAL</div>
                            <div className="panel-body"><img src={logo}
                                                             className="img-responsive" alt="Image" />
                            </div>
                            <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-primary">
                            <div className="panel-heading">BLACK FRIDAY DEAL</div>
                            <div className="panel-body"><img src={logo}
                                                             className="img-responsive" alt="Image" />
                            </div>
                            <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="container-fluid text-center">
                <p>Frontend created by: Justýna a Čenda (backend sucks)</p>
            </footer>
    </div>
,
document.getElementById('root'));
