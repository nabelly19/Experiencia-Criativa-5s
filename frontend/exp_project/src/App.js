import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from './pages/HomePage';
// Components
import Header from './components/NavbarComponent';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
    // </ErrorBoundary>
  );
}

export default App;
