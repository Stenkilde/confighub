import React, { Component } from 'react';
// Services
import {register, auth} from '../../Services/user';

class User extends Component {

    // @TODO This whole file should be rewamped, but now we can at least create an user and auth

    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            password: '',
            authName: '',
            authPass: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let UserObj = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        register(UserObj).then(function(response) {
            console.log(response);
        })
    }

    handleAuth(event) {
        event.preventDefault();

        let AuthObj = {
            email: this.state.authName,
            password: this.state.authPass
        }

        auth(AuthObj).then(function(response) {
            console.log(response);
            let authToken = localStorage.setItem('AuthToken', response.user.token);
            console.log(authToken);
        });
    }

    handleChange(type, event) {
        if (type === 'username') {
            this.setState({
                username: event.target.value
            })
        }
        if (type === 'email') {
            this.setState({
                email: event.target.value
            })
        }
        if (type === 'password') {
            this.setState({
                password: event.target.value
            })
        }
        if (type === 'authName') {
            this.setState({
                authName: event.target.value
            })
        }
        if (type === 'authPass') {
            this.setState({
                authPass: event.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input onChange={(event) => this.handleChange('username', event)} value={this.state.username}  placeholder="Username" type="text"/>
                    <input onChange={(event) => this.handleChange('email', event)} value={this.state.email}  placeholder="Email" type="text"/>
                    <input onChange={(event) => this.handleChange('password', event)} value={this.state.password}  placeholder="Password" type="password"/>
                    <button type="submit">Register</button>
                </form>

                <form onSubmit={(event) => this.handleAuth(event)}>
                    <input onChange={(event) => this.handleChange('authName', event)} value={this.state.authName}  placeholder="Email" type="text"/>
                    <input onChange={(event) => this.handleChange('authPass', event)} value={this.state.authPass}  placeholder="Password" type="password"/>
                    <button type="submit">Auth</button>
                </form>
            </div>
        );
    }
}

export default User;