import React, {Component} from 'react';
import Logo from '../images/opensource.png';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <div className="bg-info p-4">
                    <div className="container">
                        <div className="row">
                            <div className="p-0 col-lg-4 col-md-6">
                                <img className="img-fluid" src={Logo} alt="logo"/> 
                            </div>
                            <div className="col-md-5 align-self-center p-4 offset-md-1">
                            <h4>TechFlexa</h4>
                            <p className="mb-4 text-primary">Raipur &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <br/>
                                Chhattisgarh, India &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <br/>
                                <u>hello@techflexa.com</u>
                            </p>
                            <div className="row text-center">
                                <div className="col-md-2 col-3">
                                <a href="" target="_blank">
                                    <i className="fa fa-facebook text-primary fa-2x"></i>
                                </a>
                                </div>
                                <div className="col-md-2 col-3">
                                <a href="" target="_blank">
                                    <i className="fa fa-twitter text-primary fa-2x"></i>
                                </a>
                                </div>
                                <div className="col-md-2 col-3">
                                <a href="" target="_blank">
                                    <i className="fa fa-instagram text-primary fa-2x"></i>
                                </a>
                                </div>
                                <div className="col-md-2 col-3">
                                <a href="" target="_blank">
                                    <i className="fa text-primary fa-2x fa-pinterest-p"></i>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-dark py-3">
                    <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 col-md-6">
                        <p className="text-secondary mb-0">Copyright - TechFlexa</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <p className="text-secondary mb-0">2018 Open Source MIT License</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}