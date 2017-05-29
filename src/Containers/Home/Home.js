// Third Party Components
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
// Services
import {register} from '../../Services/user';
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

    handleSubmit(event) {
        event.preventDefault();



        // let UserObj = {
        //     username: this.state.username,
        //     password: this.state.password
        // }

        // register(UserObj).then(function(response) {
        //     // We should handle the user back to the main page when this is done I believe
        // })
    }

    handleChange(type, event) {
        if (type === 'username') {
            this.setState({
                username: event.target.value
            })
        }
        if (type === 'password') {
            this.setState({
                password: event.target.value
            })
        }
    }

    // <form onSubmit={(event) => this.handleSubmit(event)}>
    //                 <input onChange={(event) => this.handleChange('username', event)} value={this.state.username}  placeholder="Username" type="text"/>
    //                 <input onChange={(event) => this.handleChange('password', event)} value={this.state.password}  placeholder="Password" type="password"/>
    //                 <button type="submit">submit</button>
    //             </form>

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