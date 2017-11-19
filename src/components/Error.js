import React, { Component } from 'react';
import './Error.css';

class Error extends Component {
    render() {
        return (
            <div className={this.props.show ? 'error' : 'error hideError'}>
                <div className="errorHeading"><b>Error:</b></div>
                <div className="errorBody">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Error;
