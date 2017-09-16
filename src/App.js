import React, { Component } from 'react';
import home from './home-button-png-icon-30.png';
import './App.css';
import Convert from './Convert.js';
import { Well } from 'react-bootstrap';
// CANT GET JQ TO WORK HERE
// import $ from 'jquery';
// var hexContainer = $("#left").css("height");
// console.log(hexContainer);
const wellInstance = (
  <Well>Look I'm in a well!</Well>
);

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
                <div>
                  Super Sexy Markdown Previewer / link to fcc challenge page
                </div>
            </div>
            <div className="boxes">
                <textarea type="text" onChange={this.handleUserInput} value={this.state.userInput} className="box" id="left"/>

            <Convert output={this.state.userInput} className="box" id="right">
                </Convert>

            </div>
            <div className="footer">
              fuck
              <Well>fuck</Well>
            </div>
      </div>
      );
    }
}

export default App;
