

import React from 'react';
// import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Login from './view/login';
import Min from './view/min';





const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/min' component={Min}></Route>
            <Route exact path='/login' component={Login}></Route>

        </Switch>
    </HashRouter>
);

export default BasicRoute;
