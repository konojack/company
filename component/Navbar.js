import React, { useState } from 'react';
import Link from 'next/link';
// import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const [open, setOpen] = useState(false);



  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <img src='./favicon.ico' alt='logo' />
          </Link>
      </div>
      <div className={`menu ${open ? 'active' : ''}`}>
        <span className='toggle' onClick={() => setOpen(!open)}>
          <i></i>
          <i></i>
          <i></i>
        </span>
        {/* big menu */}
        <div className='menuContent'>
          <ul>
            <li onClick={() => setOpen(!open)}>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/steps'>61 Krokow</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/structure'>Struktura</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/ebook'>E-book</Link>
            </li>
          </ul>
        </div>
        {/* small menu */}
        <div className='s-menuContent'>
          <ul>
            <li onClick={() => setOpen(!open)}>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/steps'>61 Krokow</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/structure'>Struktura</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/ebook'>Ebook</Link>
            </li>
          </ul>
          <img src='favicon.ico' alt='logo' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
