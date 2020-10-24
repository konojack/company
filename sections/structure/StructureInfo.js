import React from 'react';
import { Elipze, ArrowDown } from '../../svg/Svg';
import { StructureImg } from '../../svg/Svg'

function StructureInfo() {
  return (
    <div className='structureInfo__container'>
      <div className='structureInfo__wrapper'>
        <div className='structureInfo__box'>
          <h1>
            15 Sekcji <Elipze />
          </h1>
          <div className='arrov_dovn'>
            <ArrowDown />
          </div>
        </div>

        <div className='structureInfo__manage'>
          <div className='structureInfo__image'>
            <StructureImg />
          </div>
          <div className='structureInfo__text'>
            <h2>Sekcje</h2>
            <p>
            W celu stworzenia profesjonalnej strony internetowej, ktora bedzie zarowno dynamiczna jak i nowoczesna, postanowilismy rozwinac dotychczasowy sposob na tworzenie stron o wi
            </p>
          </div>
        </div>
      </div>
      <img src='./tlooo.png' className='structureInfo__tlo' />
    </div>
  );
}

export default StructureInfo;
