import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchResult from './search_result';
import { fetchPolicies, fetchPolicy } from '../actions';
import {Nav, NavItem} from 'react-bootstrap';
import { List, FocusZone, FocusZoneDirection, Spinner, Label, SpinnerSize } from 'office-ui-fabric-react';

class ResultList extends Component{
    
    constructor(props={policies:[]}){
        super(props);
        this.state = {policies : props.policies};
    }

    componentDidMount() {
        this.props.fetchPolicies('WL', () => {});
    }

    render(){     
        if ((!this.props.policies) || this.props.policies.length == 0) {
            return (
                <div>
                    <Label>Large Spinner With Label</Label>
                    <Spinner size={ SpinnerSize.large } label='Loading Policies' ariaLive='assertive' />
                </div>
            )
        }

        return (
            <FocusZone direction={ FocusZoneDirection.vertical }>
                <List
                    items = {this.props.policies}
                    onRenderCell={ (item, index) => (
                        <div className='ms-ListBasicExample-itemCell ms-bgColor-themePrimary ms-fontColor-white policy_search_result' 
                            data-is-focusable={ true } 
                            onClick={() => {
                                this.props.fetchPolicy(item.policyNumber);
                            }}
                        >
                            <div className='ms-ListBasicExample-itemContent'>
                                <div className='ms-ListBasicExample-itemName policy_search_result'>{ item.policyNumber }</div>
                                <div className='ms-ListBasicExample-itemDesc'>
                                    <ul>
                                        <li><i className="ms-Icon ms-Icon--Contact" /> Owner: {item.name}</li>
                                        <li><i className={item.status === 'Active' ? "ms-Icon ms-Icon--Completed" : 'ms-Icon ms-Icon--Clock'}/> Status: {item.status}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </FocusZone>
        );
        return(
            <div className="result-list">
                <Nav bsStyle="pills" stacked>
                    {policyList}
                </Nav>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {policies : state.policies};
}

export default connect(mapStateToProps, {fetchPolicies, fetchPolicy})(ResultList);