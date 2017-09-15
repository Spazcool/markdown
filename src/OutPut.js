import React, { Component } from 'react';
import './App.css';

class OutPut extends Component {
  render() {
    return (
      <div className="OutPut">
      {this.props.output}
      </div>
    );
  }
}

export default OutPut;
