import React from 'react';

const ListItem = (props) => (
  <div>

    <div>
      <img src={props.item.images.original.url} alt="" />
    </div>
    <button>New Puppies!</button>
    <button>Favorite!</button>
  </div>
)

export default ListItem;

    // { props.item.slug }
      // <img src={props.item.image_original_url} alt="" />
      // <img src={props.item.image_original_url} alt="" />
     





