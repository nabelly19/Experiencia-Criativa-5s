import React from 'react';
import { Outlet } from 'react-router-dom';
import LoggedHeader from '../components/LoggedNavbarComponent';

const LoggedLayout = () => (
  <>
    <LoggedHeader />
    <Outlet />
  </>
);

export default LoggedLayout;