import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './components/Input';
import TabList from './components/TabList';
import TabContent from './components/TabContent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TabList />
        <hr />
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
