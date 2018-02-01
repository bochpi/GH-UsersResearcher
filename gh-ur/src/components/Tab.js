import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tab extends Component {

  render() {
    return (
      <button className="userTab" disabled={this.props.isTriggered ? false : true} onClick={() => this.props.changeUser(this.props.name)}>
        {this.props.name}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    changeUser: (name) => {
      const action = {type: 'ACTIVE_USER', activeUser: name};
      dispatch(action);
    }
  }
};

const mapStateToProps = (state) => {  
  return {
    activeUser: state.activeUser,
    users: state.users,
    isTriggered: state.isTriggered
  }
};

Tab = connect(mapStateToProps, mapDispatchToProps)(Tab)

export default Tab;
