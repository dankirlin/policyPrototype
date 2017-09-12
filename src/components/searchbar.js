import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchPolicies } from '../actions';
import { Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            searchTerm: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ isLoading: true });
        const callback = () => {
            this.setState({ isLoading: false });
        };  
        
        this.props.fetchPolicies(this.state.searchTerm, callback);        
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

        const isLoading = this.state.isLoading;
        return(
            <form
                className='searchbar' 
                onSubmit={ this.handleSubmit.bind(this) }>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type='text' 
                            placeholder='search'
                            value={ this.state.searchTerm }
                            onChange={ this.onTextChange.bind(this) }
                        />
                        <InputGroup.Button>
                            <Button 
                                disabled={ isLoading }
                                type='submit'
                                bsStyle='primary'>
                                { isLoading ? 'Loading..' : 'Search' }
                            </Button>
                        </InputGroup.Button>                      
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}

export default connect(null, { fetchPolicies })(SearchBar);