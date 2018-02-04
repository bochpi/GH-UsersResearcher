import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tab from './Tab';

class TabList extends Component {

  renderUsersTabs(users) {
    return users.map((user) => {
      if (user.length > 0)
        return <Tab name={user} key={user.login} />
    });
  }

  render() {
    return (
      <span id="userTabList">
        {this.props.currentInput.length > 0 ? this.renderUsersTabs(this.props.users) : <div>No put names</div>}
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    currentInput: state.currentInput,
    users: state.users,
    isTriggered: state.isTriggered,
  }
};

TabList = connect(mapStateToProps)(TabList)

export default TabList;
