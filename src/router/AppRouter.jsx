// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainLayout from '../layout/MainLayout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        {/* Thêm route khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
