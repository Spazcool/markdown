import React, { Component } from 'react';
import './App.css';

class InPut extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="InPut">
        <form>
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default InPut;
