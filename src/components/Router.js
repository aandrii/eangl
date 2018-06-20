import React from 'react';
import  { BrowserRouter, Switch, Route } from "react-router-dom";
import base from "../base";

import App from './App'; 
import Lessons from './Lessons'; 
import Lesson from './Lesson';
import Toolbar from './Toolbar';

class Router extends React.Component {
    

   componentWillMount() {
      
        this.ref = base.syncState(`dictionary`, {
            context: this,           
            state: "dictionary"
        });  
        console.log('Database is conecting');
        this.hand();              
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
        //console.log('Lessons componentWillUnmount')
    }

    hand = async () => {
        const store = await base.fetch('dictionary', { 
            context: this, 
            asArray: true,
            then(data) {
                console.log('data',data);
                this.setState({dass: data});
                console.log('dass is conecting');
            } 
        });
        console.log('store',store)
    }

    addCource = (name) => {
        const newNote = {
            name: name,
            folder: [],
            id: Date.now()
        };       
        this.setState({
            dictionary: [...this.state.dictionary, newNote]
        });
    }

    deleteFolder = (url, id) => {
        this.setState({
            dictionary: this.state.dictionary.filter(note => note.id !== id)
        });
    }

    updateFolder = (newFolder, id) => {

    }

    addLesson = (name) => {
        const newNote = {
            name: name,
            folder: [],
            id: Date.now()
        };       
        this.setState({
            dictionary: [...this.state.dictionary, newNote]
        });
    }


    render () {
        if (this.state === null) {
            return (<h1>Loading Database!! {/* this.hand() */}</h1>);
        }
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={ () => {<h1>Wold</h1>}}/>
                    {/* <Route 
                        exact 
                        path="/" 
                        render={(props)=> 
                            <App 
                                stat={this.state.dictionary} 
                                {...props} 
                                addFolder={this.addCource}
                            />
                        } />    */}                
                    <Route exact path="/:par"  render={(props)=> <Lessons stat={this.state.dictionary} {...props}/>} /> 
                    <Route path="/:par/:lesson"  render={(props)=> <Lesson stat={this.state.dictionary} {...props} />} /> 
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