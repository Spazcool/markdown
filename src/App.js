import React, { Component } from 'react';
import home from './home-button-png-icon-30.png';
import './App.css';
import Convert from './Convert.js';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { userInput: '' };
      this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
      this.setState({
        userInput: e.target.value
      });
    }

    render() {
      return (
        <div className="App">

            <div className="App-header">
                <a href="http://www.spazcool.com">
                    <img src={home} id="home" alt="home"/>
                </a>
                <div id="title">
                  <a href="https://www.freecodecamp.org/challenges/build-a-markdown-previewer" id="fccLink">Down with the Mark</a>
                </div>
            </div>

            <div className="boxes">
                <textarea type="text" onChange={this.handleUserInput} value={this.state.userInput} className="box" id="left"/>
                <Convert output={this.state.userInput} className="box" id="right" />
            </div>

            <div className="footer">
                Created by <a href="https://github.com/Spazcool" id="myLink">Doug</a>.
            </div>

      </div>
      );
    }
}

export default App;
