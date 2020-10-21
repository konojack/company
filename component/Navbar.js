import React, { useState } from 'react';
// import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='logo'>
        <a href='/'>
          <img src='./favicon.ico' alt='logo' />
        </a>
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
              <a href='#'>Serwis</a>
            </li>
            <li>
              <a href='#'>O nas</a>
            </li>
            <li>
              <a href='#'>Cennik</a>
            </li>
            <li>
              <a href='#'>Gift</a>
            </li>
            <li>
              <a href='#'>Kontakt</a>
            </li>
          </ul>
        </div>
        {/* small menu */}
        <div className='s-menuContent'>
          <ul>
            <li>
              <a href='#'>Serwis</a>
            </li>
            <li>
              <a href='#'>O nas</a>
            </li>
            <li>
              <a href='#'>Cennik</a>
            </li>
            <li>
              <a href='#'>Gift</a>
            </li>
            <li>
              <a href='#'>Kontakt</a>
            </li>
          </ul>
          <img src='favicon.ico' alt='logo' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
