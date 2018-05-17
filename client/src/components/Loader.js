import React, {Component} from 'react';

export default class Loader extends Component{
    render(){
        return (
            <div className="loader">
                <div className="card">
                    <div className="card-body">
                        <svg width="200" height="100">
                            <circle id="cLeft" cx="75" cy="50" r="5" />
                            <circle id="cCenter" cx="100" cy="50" r="5" />
                            <circle id="cRight" cx="125" cy="50" r="5" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}