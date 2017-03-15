import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> When a puppy's cuteness is too much to handle, say goodbye and wait for another puppy! </h4>
    {console.log('hello', props)}
    <ListItem gif={props.gifs[0]} handleListItemEntryTitleClick={props.handleListItemEntryTitleClick} handleGifLoveClick={props.handleGifLoveClick} loves={props.loves}/>
    <ListItem gif={props.gifs[1]} handleListItemEntryTitleClick={props.handleListItemEntryTitleClick} handleGifLoveClick={props.handleGifLoveClick} loves={props.loves}/>
  </div>
)
 // { props.gifs.map(gif => <ListItem key={item.id}gif={gif} handleListItemEntryTitleClick={props.handleListItemEntryTitleClick} handleGifLoveClick={props.handleGifLoveClick} loves={props.loves}/>)}

export default List;