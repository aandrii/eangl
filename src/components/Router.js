import React from 'react';
import  { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './App'; 
import Lessons from './Lessons'; 
import Lesson from './Lesson';
import Toolbar from './Toolbar';

class Router extends React.Component {
  
    render () {        
        return (
            <BrowserRouter>
                <Switch>                    
                    <Route exact path="/" component={ App } />
                    <Route path="/:lessons" component={ Lessons } />
                    <Route path="/:lessons/:lesson" component={ Lesson } />                   
                </Switch>
            </BrowserRouter>
        )
    }

}
/* 
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={()=> <App/>} />
            { <Route exact path="/" component={ App } /> }
            <Route exact path="/:par" component={ Lessons } /> 
            <Route exact path="/:par/lesson" component={ Lesson } />
        </Switch>
    </BrowserRouter>
)
 */
export default Router;