import React, { useState } from 'react';

function GetEbook() {
  const [emailEbook, setEmailEbook] = useState('');

  const submitEbook = (e) => {
    e.preventDefault();
  };
  return (
    <div className='getBook__container'>
      <div className='getBook__wrapper'>
        <div className='getBook__box'>
          <form>
            <input
              type='email'
              onChange={(e) => setEmailEbook(e.target.value)}
              placeholder='Podaj swoj adres e-mail'
            />
            <button onSubmit={(e) => submitEbook(e)}>Zdobadz e-book</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetEbook;
