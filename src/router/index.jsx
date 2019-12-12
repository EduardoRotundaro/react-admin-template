import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/layout/Navbar';
import Home from '../containers/home';
import Dashboard from '../containers/dashboard';
import NotFound from '../components/layout/NotFound';

import { NAVBAR } from '../constants/app';

export default props => (
    <Router>
        <NavBar navItems={NAVBAR}/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);