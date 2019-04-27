import React, { Component } from 'react';
import word from '../sampleWord';
import MainList from './mainList';
import {resf, ref} from "../base";
import CourseList from "./CourseList";


class App extends Component {
  state = {returnArr: null}
  nameRef = React.createRef();
  componentDidMount () {
    this.readHandle(); 
  }

  readHandle = () => {
    resf.ref('users').on('value', this.snapshotToArray);
  }  

  gotData = (data) => {
    let scores = data.val();
    let keys = Object.keys(scores); 

    //var returnArr = [];

    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];     
      let name = scores[k].name;     
      let id = scores[k].id;   
      //returnArr.push(name)  
    }
    //console.log(returnArr)
  }  

  snapshotToArray = (snapshot) =>{
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });
    console.log('returnArr',returnArr);
    this.setState({returnArr})
    return returnArr;
};
 
//snapshotToArray = snapshot => Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));

  writeUserData = (name) => {
    const playersRef =  resf.ref('users');
    playersRef.push ({name: name, id: Date.now()});      
  } 

  handleClick = () => {
    console.log('sadf');
    const sta = this.nameRef.current.value;
    this.writeUserData(this.nameRef.current.value);
    this.nameRef.current.value = '';  
  }

  handleDelete = id => {
    console.log(id);
    resf.ref(`users`).child(id).remove();
    //this.db.child(noteId).remove();
  }
  
  render() {
    if(!this.state.returnArr) {
      return <h1>Loading Database</h1>
    }
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">I m going to write my site</h1>
        </header>        
        {   
          this.state.returnArr.map((x) => {
            return (
              <CourseList
                key={x.key}
                index={x.key}
                name={x.name}
                deleteOn={this.handleDelete}
              />             
            )
          })
        }
        <input type="text" ref={this.nameRef}/>
        <button onClick={this.handleClick}>add Course</button>        
      </div>
    );
  }
}

export default App;
