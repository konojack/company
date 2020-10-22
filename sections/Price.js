import React from 'react';

function Price() {
  return (
    <div className='price__container' id='price'>
      <div className='price__wrapper'>
        <div className='price__box'>
          <h3 className='main__one'>Cennik</h3>
          <h2 className='main__two'>Promocja</h2>
        </div>
        <div className='price__info'>
            <h3 className='price'>2000zl</h3>
            <p className='raty'>Promocja na raty!</p>
            <div className='raty___option'>
                <p>Wybierz co najlepiej Ci pasuje:</p>
                <p>a&#41; 200zl x 10 rat 0%</p>
                <p>b&#41; 400zl x 5 raz 0%</p>
                <p>c&#41; 1000zl x 2 rat 0%</p>
            </div>
            <p className='no__pay'>Na poczatku nie placisz nic!</p>
            <p className='last__msg'>Pierwsza rata po 3 miesiacach od zakupu</p>
        </div>
      </div>
      <img src='./tlooo.png' className='price__tlo' />
    </div>
  );
}

export default Price;
