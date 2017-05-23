import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Containers/Home/Home';
import './index.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/Link" component={Home} />
        </div>
    </Router>,
    document.getElementById('root')
);
