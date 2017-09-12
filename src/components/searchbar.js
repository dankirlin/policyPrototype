import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPolicies } from '../actions';
import { Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();        
        this.props.fetchPolicies(this.state.searchTerm);        
    }

    onTextChange(searchTerm) {
        this.setState({ searchTerm });
    }

    onFabricSearch() {
        this.props.fetchPolicies(this.state.searchTerm, () => {})
    }

    render() {
        return <SearchBox
            value={this.state.searchTerm}
            onChange={this.onTextChange.bind(this)}
            onSearch= {this.onFabricSearch.bind(this)}
        />
    }
}

export default connect(null, { fetchPolicies })(SearchBar);