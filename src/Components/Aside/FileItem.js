import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FileItem extends Component {
    
    static propTypes = {
        file: PropTypes.object
    }

    render() {
        return (
            <div>
                <h1>{this.props.file.name}</h1>
            </div>
        );
    }
}

export default FileItem;