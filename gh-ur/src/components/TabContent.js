import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import { Icon } from 'react-fa';

const GH_API_BASIC = 'https://api.github.com/users/';

class TabContent extends Component {

  renderRepos(repos) {
    return repos.map((repo) => {
        return <li className="example" key={repo.full_name}><a href={`https://github.com/${repo.owner.login}/${repo.name}`} target="blank"><Icon name="github" className="mr" />{repo.full_name}</a></li>;
    });
  }

  renderUserInfo(repo) {
    return( 
    <div className="user-container">
      <img src={repo.avatar_url} alt={repo.login}/>
      <h1>{repo.login}</h1>
      <a href={repo.html_url} target="blank">{repo.html_url}</a>
    </div>);
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
      <div style={{marginBottom: 100}}>
        {this.props.fetchedRepos.length > 0 ? this.renderUserInfo(this.props.fetchedRepos[0].owner) : null}
        <ul>
          {this.props.fetchedRepos.length > 0 ?
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              className="animated-items-list">
            {this.renderRepos(this.props.fetchedRepos)}
            </ReactCSSTransitionGroup> :
          this.toggleContent()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    activeUser: state.activeUser,
    fetchedUser: state.fetchedUser,
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
    },
    fetchUser: (user) => {
      const request = axios.get(`${GH_API_BASIC}${user}`);      
      const action = {type: 'FETCH_REPOS', fetchedUser: request};
      dispatch(action);
    }
  }
};

TabContent = connect(mapStateToProps, mapDispatchToProps)(TabContent)

export default TabContent;
