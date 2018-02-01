import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from './components/Input';
import TabList from './components/TabList';
import TabContent from './components/TabContent';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // state = {chosenUsers: [], chosenRepos: []};

  // componentDidMount() {
  //   let self = this;
  //   axios({method: 'GET', url: GH_API_BASIC + 'bochpi/repos', json: true})
  //   .then(response => {
  //     self.setState({chosenRepos: response.data});
  //     console.log({fetched: response.data});
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  // renderUser(user) {
  //   return (
  //     <div>
  //       {user ? 
  //       <div>
  //         {user.login}
  //       </div>
  //       : <div>N</div>
  //       }
  //     </div>
  //   );
  // }

  // renderRepos(repos) {
  //   return repos.map((repo) => {
  //     return <div>{repo.name}</div>
  //   });
  // }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          
        </div>
        <TabList />
        <TabContent repos={this.props.fetchedRepos} />
        <Input />
      </div>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    fetchedRepos: state.fetchedRepos,
    isTriggered: state.isTriggered
  }
};

export default connect(mapStateToProps)(App);
