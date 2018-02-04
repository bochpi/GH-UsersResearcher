import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import axios from 'axios';

const GH_API_BASIC = 'https://api.github.com/users/';

class Input extends Component {
  
  render() {
    return (
      <span id="mainInput">
        <input className="GH-users-input" type="text" value={this.props.currentInput}
        onChange={this.props.inputChanged} placeholder="Put GitHub Users..." />
        <button className="GH-users-button" onClick={() => this.props.triggerButton(this.props.users[0])}><Icon name="eject" /></button>
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    currentInput: state.currentInput,
    users: state.users,
    isTriggered: state.isTriggered
  }
};

const mapDispatchToProps = (dispatch) => {  
  return {
    inputChanged: (e) => {
      const preprocessedInput = e.target.value.replace("  ", " ");
      const splittedUsers = preprocessedInput.split(" ");
      const action = {type: 'HANDLE_INPUT_CHANGE', currentInput: preprocessedInput, users: splittedUsers};
      dispatch(action);
    },
    triggerButton: (firstUser) => {
      axios.get(`${GH_API_BASIC}${firstUser}/repos`)
      .then((res) => dispatch({type: 'TRIGGER_BUTTON', isTriggered: true, fetchedRepos: res.data, activeUser: firstUser}));
    }
  }
};

Input = connect(mapStateToProps, mapDispatchToProps)(Input)

export default Input;
