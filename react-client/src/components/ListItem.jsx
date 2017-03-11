import React from 'react';

const ListItem = (props) => (
  <div>

    { props.item.slug }
    <div>
      <img src={props.item.images.original.url} alt="" />
    </div>
  </div>
)

export default ListItem;