import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <Footer />
      </div>
    );
  }
}

export default App;
