import React from 'react'
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Nav/>
      <Header/>
          <Outlet />
          <Footer/>
    </div>
  );
}

export default Layout