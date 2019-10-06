import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <ul  color='red' key={index} >{item}</ul>)
    }
  </ul>
);

export default List;