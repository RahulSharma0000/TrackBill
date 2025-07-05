import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import AddReceipts from '../pages/AddReceipts';
import DashBoard from '../pages/Dashboard';
import Receipt from '../pages/Receipt';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/add" element={<AddReceipts />} />
      <Route path="/receipt" element={<Receipt />} />
    </Routes>
  );
};

export default Routing;
