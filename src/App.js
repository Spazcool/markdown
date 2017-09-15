import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InPut from './InPut.js';
import OutPut from './OutPut.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {output: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({output: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="InAndOutBox">
            <InPut value={this.props.value} onChange={this.handleChange}/>
            <OutPut output={this.state.output}/>
        </div>
      </div>
    );
  }
}

export default App;
