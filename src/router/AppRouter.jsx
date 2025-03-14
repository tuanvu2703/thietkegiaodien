// src/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home } from "@mui/icons-material";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Router path="/" element={<MainLayout />}>
          <Route path="/" element={Home} />
        </Router>
        {/* Thêm route khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
