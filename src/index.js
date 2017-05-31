import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Containers/Home/Home';
import SingleView from './Containers/Single/Single';
import User from './Containers/User/User';
import './index.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/file/:id" component={SingleView} />
            <Route path="/user" component={User} />
        </div>
    </Router>,
    document.getElementById('root')
);
