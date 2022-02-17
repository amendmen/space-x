import React from 'react';

import './SideDrawer.css';

const SideDrawer = ({ isOpen, children }) => {
  let classes = ['sideNav', 'closed'];

  if (isOpen) {
    classes = ['sideNav', 'open'];
  }

  return <div className={classes.join(' ')}>{children}</div>;
};

export default SideDrawer;
