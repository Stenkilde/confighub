// Third Party Components
import React, { Component } from 'react';
// import { Row, Col } from 'react-flexbox-grid';
// Services
import files from '../../Services/files';
// Components
import Navigation from '../../Components/Navigation/Navigation';
import CfgViewer from '../../Components/Cfg/Viewer';

class SingleView extends Component {

    constructor() {
        super();

        this.state = {
            file: {}
        }
    }

    componentDidMount() {
        const me = this;

        files.get(this.props.match.params.id).then(function(response) {
            me.setState({
                file: response.file
            })
        })
    }

    render() {
        const {file} = this.state;
        
        return (
            <div>
                <Navigation />
                <CfgViewer config={'Aloha senor'} />
            </div>
        );
    }
}

export default SingleView;