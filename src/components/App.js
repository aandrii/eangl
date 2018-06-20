import React, { Component } from 'react';
import word from '../sampleWord';
import MainList from './mainList';
import base from "../base";


class App extends Component {
  nameRef = React.createRef();

  handleClick = () => {
    const name = this.nameRef.current.value;    
    this.props.addFolder(name);
    this.nameRef.current.value = '';
  }

  addUser=()=>{
    var immediatelyAvailableReference = base.push('dictionary', {
      data: {name: 'cccc', type: 'xxx'},
      then(err){
        if(!err){
          console.log('addUser')
        }
      }
    });
    //available immediately, you don't have to wait for the callback to be called
    var generatedKey = immediatelyAvailableReference.key;
  }

  authHandler = async () => {
    // 1 .Look up the current store in the firebase database
    const store = await base.fetch('dictionary', { context: this });
    console.log('authHandler');
     console.log('store', store);
     const k = Object.keys(store);
     console.log('k', k)
  };
componentDidMount() {
  this.authHandler;
}
  render() {

    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">I m going to write my site</h1>
        </header>
        {
          this.props.stat.map((e) =>
          <MainList
            key={e.id}
            id={e.id}
            index={e.key}
            name={e.name}
            folder={e.folder}
            //addFolder={this.courceDelete}
          />)
        }
        <input type="text" ref={this.nameRef}/>
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.addUser}>Click re-base</button>
        <button onClick={this.authHandler}>authHandler</button>
        
      </div>
    );
  }
}

export default App;
