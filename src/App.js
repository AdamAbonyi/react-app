import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Fetch from './service/fetch';
import Screen from './Screen';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const defaultValue = "funny";
    this.state = {
      name: defaultValue,
      src: undefined,
      input: defaultValue
    };

    this.callBot = this.callBot.bind(this);
    this.setSubredditName = this.setSubredditName.bind(this);
  }

  callBot(event) {
    this.setState({
      name: this.state.input,
      src: undefined
    }, () => {
      Fetch.getData(this.state.name).then(response => response.json()).then(s => {
        this.setState({ src: s.replace("\"", "") });
      });
    });

    event.preventDefault();
  }

  setSubredditName(object, newValue) {
    this.setState({ input: newValue });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>b0brBot test page in React</h2>
          </div>
          <p className="App-intro">
            The section below will allow you to test the b0brBot.
        </p>
          <form onSubmit={this.callBot}>
            <TextField
              id="text-field-default"
              defaultValue="funny"
              onChange={this.setSubredditName}
            />
            &nbsp;
            <RaisedButton label="Search" type="submit" />
          </form>
          <hr />
          {this.state.src &&
            <Screen src={this.state.src} />
          }
        </div>


      </MuiThemeProvider>
    );
  }
}

export default App;




