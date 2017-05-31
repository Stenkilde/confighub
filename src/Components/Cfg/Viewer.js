import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Css
import './Viewer.css';

class Viewer extends Component {
    constructor() {
        super();

        this.state = {
            fixedText: ''
        }
    }

    componentWillReceiveProps(nextProps) { 
        console.log(nextProps.config);
            this.setState({
                fixedText: nextProps.config
            })
    }

    render() {

        console.log(this.state);

        return (
            <div className="viewer">
                <p>{this.state.fixedText}</p>
            </div>
        );
    }
}

export default Viewer;