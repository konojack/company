import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Intro from './Intro';
import Grid from './Grid'

function Layout({ children }) {
  return (
      <div className='layout__container'>
        {/* <Grid /> */}
        {/* <Intro /> */}
        <div className='bg-fixed'></div>
        <Navbar />
        <div className='layout__wrapper'>{children}</div>
        <Footer />
      </div>
  );
}

export default Layout;

