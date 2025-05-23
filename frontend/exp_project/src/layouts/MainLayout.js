import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/NavbarComponent';

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default MainLayout;