// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Thêm route khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
