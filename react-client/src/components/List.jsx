import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    {console.log('hello', props)}
      <ListItem item={props.gifs[0]}/>

  </div>
)

export default List;
        // { props.gifs.map(item => <ListItem key={item.id} item={item}/>)}
    // <ListItem item={props.gifs}/>

    // { 

      // for (var i = 0; i < 2; i++) {
      // } 
      
    // }
    // There are { props.gifs.length } gifs.
