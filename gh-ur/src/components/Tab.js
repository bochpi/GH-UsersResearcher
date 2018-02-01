import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const GH_API_BASIC = 'https://api.github.com/users/';

class Tab extends Component {

  serveTab = () => {
    this.props.changeUser(this.props.name);
    this.props.fetchUser(this.props.name);
    this.props.fetchRepos(this.props.name);
  }

  render() {
    return (
      <button className="userTab" disabled={this.props.isTriggered ? false : true} 
      onClick={this.serveTab}>
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
    },
    fetchUser: (user) => {
      axios.get(`${GH_API_BASIC}${user}`)
      .then((res) => dispatch({type: 'FETCH_USER', fetchedUser: res.data}));
    },
    fetchRepos: (user) => {
      axios.get(`${GH_API_BASIC}${user}/repos`)
      .then((res) => dispatch({type: 'FETCH_REPOS', fetchedRepos: res.data}));
    }
  };
}

const mapStateToProps = (state) => {  
  return {
    activeUser: state.activeUser,
    users: state.users,
    isTriggered: state.isTriggered
  }
};

Tab = connect(mapStateToProps, mapDispatchToProps)(Tab)

export default Tab;
