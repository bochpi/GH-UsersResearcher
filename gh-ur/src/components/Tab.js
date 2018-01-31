import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tab extends Component {
  render() {
    return (
      <span className="userTab">
        {this.props.name}
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    users: state.users,
  }
};

Tab = connect(mapStateToProps)(Tab)

export default Tab;
