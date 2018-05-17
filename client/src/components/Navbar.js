import React, { Component } from 'react';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-info">
                <div className="container">
                <a className="navbar-brand" href="">
                    <i className="fa d-inline fa-lg fa-bullseye"></i>
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center justify-content-between" id="navbar2SupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="">Create</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="">Templates</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="">Themes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="">Login
                        <br/>
                        </a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control" type="text" />
                    <button className="btn btn-link my-2 my-sm-0" type="submit">
                        <i className="fa d-inline fa-lg fa-search text-primary"></i>
                    </button>
                    </form>
                </div>
                </div>
            </nav>
        )
    }
}