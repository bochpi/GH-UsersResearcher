import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tab extends Component {

  // activeUser(name) {
  //   console.log(name);
  // }

  render() {
    return (
      <span className="userTab" onClick={() => this.props.changeUser(this.props.name)}>
        {this.props.name}
      </span>
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
    users: state.users
  }
};

Tab = connect(mapStateToProps, mapDispatchToProps)(Tab)

export default Tab;
