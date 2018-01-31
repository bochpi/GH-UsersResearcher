import React, { Component } from 'react';

class Input extends Component {
  
    render() {
      return (
        <span>
          <input type="text" placeholder="Put GitHub Users..." />
          <button>OK</button>
        </span>
      );
    }
  }
  
  export default Input;
  