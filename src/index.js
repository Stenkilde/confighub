import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Containers/Home/Home';
import SingleView from './Containers/Single/Single';
import './index.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/file/:id" component={SingleView}/>
        </div>
    </Router>,
    document.getElementById('root')
);
