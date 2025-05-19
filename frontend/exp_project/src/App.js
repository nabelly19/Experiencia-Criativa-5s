import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

// Pages
// Components
import Header from './components/NavbarComponent';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<ListPage />} /> */}
      </Routes>
    </>
    // </ErrorBoundary>
  );
}

export default App;
