import React, { Component } from 'react';
import CardItem from './card_item';
import {fetchPolicy} from '../actions';
import { connect } from 'react-redux';
import { Thumbnail } from 'react-bootstrap';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchResult: props.isSearchResult,
      policyNumber: props.title
    }
  }
  handleSelect() {
    if (!this.state.isSearchResult) return;

    this.props.fetchPolicy(this.props.title);
  }

  render() {
    if (!this.props || this.props === undefined || this.props === {}) {
      return (<div>Loading...</div>);
    }
    const valueList = this.props.items.filter(
      (item) => { return !item.name.includes("ID")&&!item.name.includes("Code")}
    )
    .map((item) => {
      let value = item.value;
      if(typeof value === 'string' && Date.parse(value)){
        console.log(item.value);
        value = item.value.split('T')[0];
      }
      return (
        <CardItem key={item.name} name={item.name} value={value}/>
      );
    });

    return (
      <div className = "card" onClick={ this.handleSelect.bind(this)}>
        <Thumbnail>
          <h4>{this.props.title}</h4>          
          <ul className="unorderdList">
            { valueList }
          </ul>
        </Thumbnail>
      </div>
    );
  }
}

export default connect(null,  {fetchPolicy} )(Card);
