import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

const NavigationItem = ({ item, click }) => (
  <li className="navigation-item" onClick={click}>
    <NavLink exact="true" to={`shipment/${item.id}`}>
      {item.name}
    </NavLink>
  </li>
);

export default NavigationItem;
