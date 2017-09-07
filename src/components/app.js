import React, { Component } from 'react';
import SearchBar from './searchbar';
import PolicyMainPanel from './policy/policy_main_panel';
import ResultList from './result_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PolicyMainPanel />
        <ResultList />
      </div>
    );
  }
}
