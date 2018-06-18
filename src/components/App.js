import React, { Component } from 'react';
import word from '../sampleWord';
import MainList from './mainList';
import base from "../base";


class App extends Component {
  nameRef = React.createRef();

  courceDelete = (id) => {
    this.setState({
      dictionary: this.state.dictionary.filter(note => note.id !== id)
    });   
  }

  courceAdd = () => {
    const newNote = {
      name: this.nameRef.current.value,
      folder: [],
      id: Date.now()
    };    
    this.setState({
      dictionary: [...this.state.dictionary, newNote]
    });
    this.nameRef.current.value = '';
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
            courceDelete={this.courceDelete}
          />)
        }
        <input type="text" ref={this.nameRef}/>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
