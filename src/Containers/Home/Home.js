// Third Party Components
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
// Services
import files from '../../Services/files';
// Components
import Navigation from '../../Components/Navigation/Navigation';
import Aside from '../../Components/Aside/Aside';
import TextField from '../../Components/TextField/TextField';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            files: []
        }
    }

    componentDidMount() {
        const me = this;
        files.collection().then(function(response) {
            me.setState({
                files: response.collection.data
            })
        });
    }

    render() {
        return (
            <div>
                <Navigation />
                <div>
                    <Row>
                        <Col xs={12} md={10}>
                            <TextField />
                        </Col>
                        <Col xs={12} md={2}>
                            <Aside files={this.state.files} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;