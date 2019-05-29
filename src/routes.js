import React from 'react';
import {BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { Switch } from 'react-router';
import StartPage from './Components/StartPage';
import nextpage1 from './nextpage1/nextpage1';
import nextpage2 from './nextpage2/nextpage2';
import nextpage3 from './nextpage3/nextpage3';
import nextpage4 from './nextpage4/nextpage4';
import result from './result/result';
import networkError from './Components/networkError';
import PageNotFound from './Components/pageNotFound';
const Routes = () => {
    return(
        <Router>
            <Switch>
            <Route path="/" component={StartPage} exact={true} />
             <Route path="/nextpage1" component={nextpage1} exact={true} />
            <Route path="/nextpage2" component={nextpage2} exact={true} />
            <Route path="/nextpage3" component={nextpage3} exact={true} />
            <Route path="/nextpage4" component={nextpage4} exact={true} />
            <Route path="/result" component={result} exact={true} />
            <Route path="/network_error" component={networkError} exact={true} />
            <Route path="*" component={PageNotFound} exact={true} />
            </Switch>
        </Router>
    );
    }
export { Routes }