/**
 * @file demo
 * @author Sheeta(wuhayao@gmail.com)
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from 'App';

render(
    <Router history={browserHistory}>
        <Route path="/demo/index.html" component={App}>
        </Route>
    </Router>,
    document.getElementById('app')
);
