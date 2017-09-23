import React, { Component } from 'react';
import './Screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen-frame">
      <iframe title="frame" src={this.props.src}>
      </iframe>
      </div>
    );
  }
}

export default Screen;
