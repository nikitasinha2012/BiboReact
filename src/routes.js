import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import StartPage from './Components/StartPage';
import nextpage1 from './nextpage1/nextpage1';
import nextpage2 from './nextpage2/nextpage2';
import nextpage3 from './nextpage3/nextpage3';
import nextpage4 from './nextpage4/nextpage4';
import result from './result/result';


const Routes = () => {
    return(
        <Router>
            <Route exact path="/" component={StartPage} />
             <Route path="/nextpage1" component={nextpage1}/>
            <Route path="/nextpage2" component={nextpage2}/>
            <Route path="/nextpage3" component={nextpage3}/>
            <Route path="/nextpage4" component={nextpage4}/>
            <Route path="/result" component={result}/>
    
        </Router>
    );
}

export { Routes }