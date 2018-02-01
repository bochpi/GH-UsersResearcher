import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import { Icon } from 'react-fa';
import Tab from './Tab';

const GH_API_BASIC = 'https://api.github.com/users/';

class TabContent extends Component {

  renderRepos(repos) {
    return repos.map((repo) => {
        return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
        <li className="example"><Icon name="github" className="mr" />{repo.full_name}</li>
        </ReactCSSTransitionGroup>);
    });
  }

  toggleContent() {
    if (!this.props.isTriggered) {
      return null;
    }
    else {
      return <div><Icon spin name="spinner" /></div>;
    }
  }

  render() {
    return (
      <ul>
        {this.props.fetchedRepos.length > 0 ?
            this.renderRepos(this.props.fetchedRepos) :
        this.toggleContent()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    activeUser: state.activeUser,
    fetchedRepos: state.fetchedRepos,
    isTriggered: state.isTriggered,
  }
};

const mapDispatchToProps = (dispatch) => {  
  return {
    fetchRepos: (user) => {
      const request = axios.get(`${GH_API_BASIC}${user}/repos`);      
      const action = {type: 'FETCH_REPOS', fetchedRepos: request};
      dispatch(action);
    }
  }
};

TabContent = connect(mapStateToProps, mapDispatchToProps)(TabContent)

export default TabContent;
