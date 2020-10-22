import React from 'react';
import { Elipze, ArrowDown, EbookImg } from '../../svg/Svg';
import GetEbook from './GetEbook'

function EbookInfo() {
  return (
    <div className='ebookInfo__container'>
      <div className='ebookInfo__wrapper'>
        <div className='ebookInfo__box'>
          <h1>
            E-BOOK <Elipze />
          </h1>
          <div className='arrov_dovn'>
            <ArrowDown />
          </div>
        </div>

        <div className='ebook__manage'>
          <div className='ebook__image'>
            {/* <img src='./ebook.png' alt='Ebook image' /> */}
            <EbookImg />
          </div>
          <div className='ebook__text'>
            <h2>Content Marketing i Social Media</h2>
            <p>
              {' '}
              Zbior najlepszych zasad dotyczacych tworzenia contentu
              marketingowego, social media i sposobow na zdobycie wiekszej
              ilosci klientow.
            </p>
            <br />
            <p>
              Tworca E-Booka Pan Michal Moneta od lat zajmuje sie zagadnieniamy
              dotyczacymi marketingu. Jest to jego kolejna publikacja w ktorej
              znajda Panstwo duzo wartosciowych wskazowek i informacji.{' '}
            </p>

            <GetEbook />
          </div>
        </div>
      </div>
      <img src='./tlooo.png' className='ebookInfo__tlo' />
    </div>
  );
}

export default EbookInfo;
