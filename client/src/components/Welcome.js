import React, {Component} from 'react';
import Logo from '../images/opensource.png';

export default class Welcome extends Component{
    render(){
        return (
            <div>
                <div className="h-50 d-flex align-items-center bg-info">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto text-center col-md-6">
                                <h1 className="display-1 text-white">OpenForm</h1>
                                <p className="lead text-primary">A minimal and feature reach open source application for surveying, taking feedbacks and creating quiz.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="p-4 col-lg-4 col-md-6">
                            <h4>
                                <b>Surveying</b>
                            </h4>
                            <p>Create custom surveys and questionnaires with the power of open source. Almost every fields available for taking survey. Export in Excel, JSON, CSV</p>
                            <p>
                                <a href="">Take me to survey templates</a>
                            </p>
                            </div>
                            <div className="p-4 col-lg-4 col-md-6">
                            <h4>
                                <b>Quiz</b>
                            </h4>
                            <p>A drag and drop tool for creating quiz, embed it your website and share anywhere you want. Download response in any format you want.</p>
                            <p>
                                <a href="">Take me to quiz templates</a>
                            </p>
                            </div>
                            <div className="p-4 col-lg-4">
                            <h4>
                                <b>Feedback</b>
                            </h4>
                            <p>Create forms with drag and drop builder. Free templates for creating form and analyze the feedback given by your valuable customer or employee.</p>
                            <p>
                                <a href="">Take me to feedback templates</a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="py-5 bg-primary">
                    <div className="container">
                    <div className="row">
                        <div className="p-4 col-lg-8">
                        <h4 className="mb-3 text-white">We are the first</h4>
                        <div className="blockquote text-muted">
                            <p className="mb-0">There are many tools available in the market for creating quiz, creating feedback form, take surveys but we are different. We simply don't give you data back rather we analyze it with machine learning.</p>
                            <div className="blockquote-footer">Future Plan</div>
                        </div>
                        <a className="btn btn-info" href="">Sign Up</a>
                        </div>
                        <div className="col-md-4 align-self-center">
                            <img className="img-fluid d-block" src={Logo} alt="Logo"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}