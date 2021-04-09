import React from 'react';

import MenuItem from './MenuItem.jsx';

export const Menu = ({ items }) => (
  <div className="sub-menu">
    { items && items.map(({ itemID, title, url, current }) => (
      <MenuItem key={itemID} title={title} url={url} selected={current} />
    ))}
  </div>
);

export default (props) => <Menu {...props} />;