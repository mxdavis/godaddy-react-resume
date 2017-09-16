import React, { Component } from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'
import UpperFooter from './components/UpperFooter'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <Navbar />
            <Main />
            <UpperFooter />
            <Footer />
          </div>
        </div>
    );
  }
}

export default App;
