import React from 'react';

const ListItem = (props) => (
  <div>
    <div>
      <img src={props.gif.images.fixed_width.url} alt={ props.gif.slug } />
      <p>Times this cutie has been loved: 0</p>
    </div>
    <button>Bye!</button>
    <button>Love</button>
  </div>
)

export default ListItem;

      // <img src={props.item.image_original_url} alt="" />
      // <img src={props.item.image_original_url} alt="" />
     





