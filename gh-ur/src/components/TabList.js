import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tab from './Tab';

class TabList extends Component {

  renderUsersTabs(users) {
    return users.map((user) => {
      if (user.length > 0)
        return <Tab name={user} />
    });
  }

  render() {
    return (
      <span id="userTabList">
        {this.props.users ? this.renderUsersTabs(this.props.users) : <div>s</div>}
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    users: state.users,
    isTriggered: state.isTriggered
  }
};

TabList = connect(mapStateToProps)(TabList)

export default TabList;
