import React from 'react';

const ListItem = (props) => (
  <div>
    <div>
      {console.log('items', props)}
      <img src={props.gif.images.fixed_width.url} alt={ props.gif.slug } />
      <p>Times this cutie has been loved: {props.loves}</p>
    </div>
    <button onClick={() => props.handleListItemEntryTitleClick(props.gif)}>Bye!</button>
    <button onClick={() => props.handleGifLoveClick(props.gif)}>Love</button>
  </div>
)

export default ListItem;

      // <img src={props.item.image_original_url} alt="" />
      // <img src={props.item.image_original_url} alt="" />
    