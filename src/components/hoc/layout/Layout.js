import React, { useState } from 'react';
import Header from '../../navigation/header/Header';
import SideDrawer from '../../navigation/sideDrawer/SideDrawer';
import NavigationItems from '../../navigation/navigationItems/NavigationItems';

import './Layout.css';

import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/shipment';

const Layout = ({ items, children, getItems }) => {
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);

  const handleSideDrawerToggle = () => {
    setSideDrawerIsOpen(!sideDrawerIsOpen);
  };

  getItems();

  return (
    <div className="main">
      <Header togglerClicked={() => handleSideDrawerToggle()} sideDrawerIsOpen={sideDrawerIsOpen} />
      <SideDrawer isOpen={sideDrawerIsOpen}>
        <NavigationItems close={() => setSideDrawerIsOpen(false)} />
      </SideDrawer>
      <div className="main__body">
        <NavigationItems />
        <div className="main__content">{children}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(actionCreators.fetchShipments())
  };
};

export default connect(null, mapDispatchToProps)(Layout);
