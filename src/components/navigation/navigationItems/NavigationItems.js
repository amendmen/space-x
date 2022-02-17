import React from 'react';
import NavigationItem from './navigationItem/NavigationItem';
import './NavigationItems.css';

import { connect } from 'react-redux';

const NavigationItems = ({ items, close }) => (
  <div className="navigation-items">
    <div className="navigation-items__title">Shipment List</div>
    <ul className="navigation-items__list">
      {items.map((item) => (
        <NavigationItem item={item} key={item.id} click={close} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(NavigationItems);
