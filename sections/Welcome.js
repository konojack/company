import React from 'react';
import Link from 'next/link';
import {
  Circle,
  Domek,
  Harmonia,
  Krezka,
  Circle2,
  ImageTeacher,
  Checked,
} from '../svg/Svg';

function Welcome() {
  return (
    <div className='welcome__container'>
      <div className='welcome__wrapper'>
        <div className='welcome__box welcome__box-left'>
          <div className='welcome__box-left-content'>
            <p className='dobrazmiana'>Dobra zmiana</p>
            <h1 className='title'>
              Interaktywne <br /> strony <br /> wizytowkowe
            </h1>
            <div className='option'>
              <div className='left__option'>
                <p>
                  <Checked />
                  Nowoczesne #2021
                </p>
                <p>
                  <Checked />
                  Dynamiczne
                </p>
                <p>
                  <Checked />
                  Interaktywne
                </p>
              </div>
              <div className='right__option'>
                <p>
                  <Checked />
                  15+ sekcji
                </p>
                <p>
                  <Checked />
                  61 podjetych krokow
                </p>
                <p>
                  <Checked />
                  google Moja Firma
                </p>
              </div>
            </div>
            <p className='e-book buttonBlue'><Link href='/ebook'>Darmowy E-book</Link></p>
          </div>
        </div>
        <div className='welcome__box welcome__box-right'>
          <ImageTeacher />
        </div>
      </div>

      {/* tlo */}
      {/* <img src='./tlooo.png' className='welcome__tlo' /> */}

      <div className='welcome__elementy'>
        <Circle />
        <Domek />
        <Harmonia />
        <Krezka />
        <Circle2 />
      </div>
    </div>
  );
}

export default Welcome;
