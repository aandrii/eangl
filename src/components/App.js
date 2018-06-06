import React, { Component } from 'react';
import word from '../sampleWord';
import MainList from './mainList';

class App extends Component {
  state = {
      dictionary: [],
      order: {}
  };
  componentDidMount() {
    this.setState({ dictionary: word})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">          
        <h1 className="App-title">I m going to write my site</h1>
        </header>
        {
          this.state.dictionary.map((e) =>
            <MainList
              key={e.name}
              index={e.name}
              name={e.name}
              folder={e.folder}
            />)
        }
      </div>
    );
  }
}

export default App;
