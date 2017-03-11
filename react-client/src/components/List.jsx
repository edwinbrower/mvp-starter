import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.gifs.length } gifs.
    { props.gifs.map(item => <ListItem key={item.id} item={item}/>)}
  </div>
)

export default List;