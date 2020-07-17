import React, { Component } from 'react';
import './App.css';
import { Well } from 'react-bootstrap';

var marked = require('marked');

function markItUp(a) {
    return {__html: a};
}

class Convert extends Component {
    render() {
      return (
        <Well dangerouslySetInnerHTML = {markItUp(marked(this.props.output))} className="box" id="right"/>
      );
    }
}

export default Convert;
