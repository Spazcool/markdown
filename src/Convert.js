import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';

var marked = require('marked');

function markItUp(a) {
    return {__html: a};
}

class Convert extends Component {
    render() {
      return (
        <div dangerouslySetInnerHTML = {markItUp(marked(this.props.output))} className="box" id="right"/>
      );
    }
}

export default Convert;
