import React, { Component } from 'react';
import {post} from '../../Services/rate';

class Rater extends Component {

    constructor() {
        super();

        this.state = {
            amount: 0
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let RateObj = {
            fileId: this.props.fileId,
            amount: this.state.amount
        }

        post(RateObj).then(function(response) {
            console.log(response);
        })
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input value={this.state.amount} onChange={(e) => this.handleChange(e)} type="number" />
                <button type="submit">RATE</button>
            </form>
        );
    }
}

export default Rater;