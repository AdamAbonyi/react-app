import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './App.css';
import Tralala from './Tralala';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Adam's React Test Page</h2>
        </div>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          Kiss Adam to continue. Also i have added a button that does nothing :-)
          Level 1
        </p>
        <RaisedButton label="Material UI" />
        <Tralala name="adam"/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;




