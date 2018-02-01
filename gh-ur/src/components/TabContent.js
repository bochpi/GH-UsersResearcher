import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Tab from './Tab';

const GH_API_BASIC = 'https://api.github.com/users/';

class TabContent extends Component {

  componentDidMount(){
    this.props.fetchRepos(this.props.activeUser);
  }

  renderRepos(repos) {
    return repos.map((repo) => {
        return <li>{repo.full_name}</li>
    });
    console.log(repos);
  }

  render() {
    console.log(this.props.repos);
    return (
      <ul>
        {this.props.fetchedRepos.length > 0 ? this.renderRepos(this.props.fetchedRepos) : <div>Brak!</div>}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    activeUser: state.activeUser,
    fetchedRepos: state.fetchedRepos
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
