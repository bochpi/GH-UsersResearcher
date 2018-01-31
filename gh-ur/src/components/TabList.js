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
    console.log(this.props)
    return (
      <span>
        {this.renderUsersTabs(this.props.users)}
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    users: state.users,
  }
};

// const mapDispatchToProps = (dispatch) => {  
//   return {
//     inputChanged: (e) => {
//       const preprocessedInput = e.target.value.replace("  ", " ");
//       const splittedUsers = preprocessedInput.split(" ");
//       const action = {type: 'HANDLE_INPUT_CHANGE', currentInput: preprocessedInput, users: splittedUsers};
//       dispatch(action);
//     }
//   }
// };

TabList = connect(mapStateToProps)(TabList)

export default TabList;
