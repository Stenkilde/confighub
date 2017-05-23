import React, { Component } from 'react';

import PropTypes from 'prop-types';

// Components
import FileItem from './FileItem';

class Aside extends Component {

    static propTypes = {
        files: PropTypes.array
    };

    render() {
        return (
            <div>
                {(() => {
                    // @NOTE We don't want to mount if there is no files in the feed
                    if (this.props.files.length !== 0) {
                        return (
                            this.props.files.map((file, index) => {
                                return (
                                    <FileItem file={file} key={index} />
                                );
                            })
                        )
                    } else {
                        return (
                            <h2>Lol no files</h2>
                        );
                    }
                })()}
            </div>
        );
    }
}

export default Aside;