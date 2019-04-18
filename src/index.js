import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './stea.png';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";


ReactDOM.render(
    <div>
        <Header />
        <Navigation />
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
        <Footer />
    </div>
,
document.getElementById('root'));
