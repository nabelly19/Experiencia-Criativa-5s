import "./App.css";
import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ManagementPage from "./pages/ManagementPage";

// Components

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import LoggedLayout from "./layouts/LoggedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<LoggedLayout />}>
          <Route path="/management" element={<ManagementPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
    // </ErrorBoundary>
  );
}

export default App;
