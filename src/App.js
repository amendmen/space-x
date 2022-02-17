import React from 'react';
import Layout from './components/hoc/layout/Layout';
import Shipment from './components/pages/shipment/Shipment';
import Main from './components/pages/main/Main';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="shipment/:id" element={<Shipment />} />
      </Routes>
    </Layout>
  );
};

export default App;
