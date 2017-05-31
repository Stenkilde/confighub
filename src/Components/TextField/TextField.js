import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
            name: '',
            category: '',
            redirectToReferrer: false,
            newFileId: null
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

    handleSelect(e) {
        this.setState({
            category: e.target.value
        })
    }

    handleClick(e) {
        let fileObj = {
            name: this.state.name,
            body: this.state.config,
            userId: 1,
            // @TODO DEMO FIELD PLEASE CHANGE
            category: this.state.category
        }

        let me = this;

        post(fileObj).then(function(response) {
            me.setState({ 
                redirectToReferrer: true,
                newFileId: response.file.id
            })
        })
    }

    render() {

        if (this.state.redirectToReferrer) {
            return (
                <Redirect to={"/file/" + this.state.newFileId} />
            )
        }

        return (
            <div>
                <div className="textfield-container">
                    <input onChange={(e) => this.handleChange(e, 'name')} type="text" placeholder="Config Name" />
                    <select onChange={(e) => this.handleSelect(e)}>
                        <option value="">Please Select an option</option>
                        <option value="Crosshair">Crosshair</option>
                        <option value="Viewmodel">Viewmodel</option>
                    </select>
                    <textarea onChange={(e) => this.handleChange(e, 'config')} placeholder="Write your config here, each new line is a new config line" className="textfield"></textarea>
                </div>
                <br />
                <br />
                <button onClick={(e) => this.handleClick(e)}>Submit</button>
            </div>
        );
    }
}

export default TextField;