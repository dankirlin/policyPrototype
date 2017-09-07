import React, { Component } from 'react';
import CardItem from './card_item';

const Card = (props) => {
  if (!props || props === undefined || props === {}) {
    return (<div>Loading...</div>);
  }

  const valueList = props.items.filter(
    (item) => !item.name.includes("ID")
  )
  .map((item) => {
    return (
      <CardItem name={item.name} value={item.value}/>
    );
  });

  return (
    <div className='card'>
        <h4>{props.title}</h4>
        <ul>
          { valueList }
        </ul>
    </div>
  );
}

export default Card;
