import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getUser} from '../../Services/user';
// Css
import './FileItem.css';

class FileItem extends Component {
    
    static propTypes = {
        file: PropTypes.object
    }

    constructor() {
        super();

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const me = this;

        getUser(this.props.file.userId).then(function(response) {
            me.setState({
                user: response.user
            })
        })
    }

    render() {

        const {user} = this.state;
        const {file} = this.props;

        return (
            <div className="fileitem">
                <p className="title">{file.name}</p>
                <p className="category">Created by {user.name} in {file.category}</p>
                <time className="time">{file.created_at}</time>
                <hr/>
            </div>
        );
    }
}

export default FileItem;