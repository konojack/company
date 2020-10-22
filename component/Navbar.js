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
            <li>
              {/* <a href='#offer'>Serwis</a> */}
              <Link href='/'>Home</Link>
            </li>
            <li>
              {/* <a href='#team'>O nas</a> */}
              <Link href='/steps'>61 Krokow</Link>
            </li>
            <li>
              {/* <a href='#price'>Cennik</a> */}
              <Link href='/structure'>Struktura</Link>
            </li>
            <li>
              <Link href='/ebook'>E-book</Link>
            </li>
            {/* <li>
              <a href='#contact'>Kontakt</a>
            </li> */}
          </ul>
        </div>
        {/* small menu */}
        <div className='s-menuContent'>
          <ul>
            <li>
              {/* <a href='#offer'>Serwis</a> */}
              <Link href='/'>Home</Link>
            </li>
            <li>
              {/* <a href='#team'>O nas</a> */}
              <Link href='/steps'>61 Krokow</Link>
            </li>
            <li>
              {/* <a href='#price'>Cennik</a> */}
              <Link href='/structure'>Struktura</Link>
            </li>
            <li>
              <Link href='/ebook'>Ebook</Link>
            </li>
            {/* <li>
              <a href='#contact'>Kontakt</a>
            </li> */}
          </ul>
          <img src='favicon.ico' alt='logo' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
