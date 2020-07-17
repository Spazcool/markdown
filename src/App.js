import React, { Component } from 'react';
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

            <header className="App-header">
              <a href="http://www.spazcool.com">
                <i className="fas fa-home" id="home"></i>
              </a>
              <span id="title">Down with the Mark</span>
            </header>

            <main className='container'>
              <div className="row boxes">
                <div className='col-sm-12 col-md-6 box'>
                  <textarea 
                    type="text" 
                    onChange={this.handleUserInput} 
                    value={this.state.userInput} 
                    id="left"
                  />
                </div>
                <div className='col-sm-12 col-md-6 box'>
                  <Convert 
                    output={this.state.userInput} 
                    id="right" 
                  />
                </div>
              </div>
            </main>

            <footer className="footer">
                Built with <i className="fab fa-react"></i> by <a id="myLink" href='https://github.com/Spazcool'>Doug Wright</a>.
            </footer>
      </div>
      );
    }
}

export default App;
