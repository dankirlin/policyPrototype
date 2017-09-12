import React, { Component } from 'react';
import SearchBar from './searchbar';
import PolicyMainPanel from './policy/policy_main_panel';
import ResultList from './result_list';
import {Fabric, PrimaryButton} from 'office-ui-fabric-react';
 
export default class App extends Component {
  render() {
    
    return (
        <Fabric>
          <SearchBar />
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm8 ms-md8 ms-lg8" >A</div>
              <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4"><ResultList /></div>
            </div>
          </div>
        </Fabric>
    );
  }
}
