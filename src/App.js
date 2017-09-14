import React, { Component } from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <Navbar />
            <Main />
          </div>
        </div>
    );
  }
}

export default App;
