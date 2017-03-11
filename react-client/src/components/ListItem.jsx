import React from 'react';

const ListItem = (props) => (
  <div>
    <div>
      <img src={props.gif.images.fixed_width.url} alt={ props.gif.slug } />
    </div>
    <button>New Puppies!</button>
    <button>Favorite!</button>
  </div>
)

export default ListItem;

      // <img src={props.item.image_original_url} alt="" />
      // <img src={props.item.image_original_url} alt="" />
     





