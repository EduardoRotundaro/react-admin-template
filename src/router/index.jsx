import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../containers/home';
import Dashboard from '../containers/dashboard';
import NotFound from '../components/layout/NotFound';

export default props => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);