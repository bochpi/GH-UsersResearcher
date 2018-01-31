import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import Input from './components/Input';
import logo from './logo.svg';
import './App.css';

const GH_API_BASIC = 'https://api.github.com/users/';

class App extends Component {

  state = {chosenUsers: [], chosenRepos: []};

  componentDidMount() {
    let self = this;
    axios({method: 'GET', url: GH_API_BASIC + 'bochpi/repos', json: true})
    .then(response => {
      self.setState({chosenRepos: response.data});
      console.log({fetched: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  renderUser(user) {
    return (
      <div>
        {user ? 
        <div>
          {user.login}
        </div>
        : <div>N</div>
        }
      </div>
    );
  }

  renderRepos(repos) {
    return repos.map((repo) => {
      return <div>{repo.name}</div>
    });
  }

  render() {
    console.log(this.state.chosenRepos);
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <p className="App-intro">
          {this.renderUser(this.state.chosenUsers)}
          {this.state.chosenRepos ? this.renderRepos(this.state.chosenRepos) : <div>N</div>}
        </p>
        <Input />
      </div>
    );
  }
}

export default App;
