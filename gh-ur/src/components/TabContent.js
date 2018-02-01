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
    // return repos.map((repo) => {
    //   if (repo.length > 0)
    //     return <li>{repo}</li>
    // });
    console.log(repos);
  }

  render() {
    console.log(this.props);
    return (
      <ul>
        {2>1 ? <div></div> : <div></div>}
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
