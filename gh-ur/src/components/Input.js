import React, { Component } from 'react';

class Input extends Component {
  
  state = {currentInputContent: '', usersList: []};

  handleInputChange = (e) => {
    e.preventDefault();
    const splittedUsers = e.target.value.split(" ");
    this.setState({currentInputContent: e.target.value, usersList: splittedUsers});
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
  