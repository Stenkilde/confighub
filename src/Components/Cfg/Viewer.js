import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Css
import './Viewer.css';

class Viewer extends Component {

    static propTypes = {
        config: PropTypes.string
    };

    constructor() {
        super();

        this.state = {
            fixedText: ''
        }
    }

    componentDidMount() {
        if (this.props.config) {

            this.setState({
                fixedText: this.props.config.split(" ").join("\n")
            })
        }
    }

    render() {
        return (
            <div className="viewer">
                <p>{this.state.fixedText}</p>
            </div>
        );
    }
}

export default Viewer;