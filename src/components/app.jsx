import React from 'react';
import Webpack from '../images/webpak.jpg';

class App extends React.Component {
    render() {
        return(
            <div>
                <img src={Webpack}/>
                <h1>React + Webpack</h1>
            </div>
        )
    }
}

export default App;