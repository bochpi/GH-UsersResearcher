import React, { Component } from 'react';

class Input extends Component {
  
  state = {currentInputContent: '', usersList: []};

  handleInputChange = (e) => {
    e.preventDefault();
    const preprocessedInput = e.target.value.replace("  ", " ");
    const splittedUsers = preprocessedInput.split(" ");
    //console.log(e.target);
    this.setState({currentInputContent: preprocessedInput, usersList: splittedUsers});
  }

  render() {
    console.log({inputValue: this.state.usersList});
    return (
      <span>
        <input type="text" value={this.state.currentInputContent} placeholder="Put GitHub Users..."
        onChange={this.handleInputChange} />
        <button>OK</button>
      </span>
    );
  }
}

export default Input;
  