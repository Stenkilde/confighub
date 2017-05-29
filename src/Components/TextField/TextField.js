import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Css
import './TextField.css';
// Services
import {post} from '../../Services/files';

class TextField extends Component {

    constructor() {
        super();

        this.state = {
            config: '',
            name: ''
        }
    }

    static propTypes = {
        config: PropTypes.string
    };

    handleChange(e, type) {
        if (type === 'name') {
            this.setState({
                name: e.target.value
            })
        }
        
        if (type === 'config') {
            this.setState({
                config: e.target.value
            })
        }
    }

    handleClick(e) {
        let fileObj = {
            name: this.state.name,
            body: this.state.config,
            userId: 1,
            // @TODO DEMO FIELD PLEASE CHANGE
            category: 'Viewmodel'
        }

        post(fileObj).then(function(response) {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <div className="textfield-container">
                    <input onChange={(e) => this.handleChange(e, 'name')} type="text" placeholder="Config Name" />
                    <textarea onChange={(e) => this.handleChange(e, 'config')} placeholder="Write your config here, each new line is a new config line" className="textfield"></textarea>
                </div>
                <br />
                <button onClick={(e) => this.handleClick(e)}>Submit</button>
            </div>
        );
    }
}

export default TextField;