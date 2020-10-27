import React, { useState } from 'react';
import { MalyTriangle, Krezka, Krezka2, InnyTriangle } from '../svg/Svg';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact__container' id='contact'>
      <div className='contact__wrapper'>
        <div className='contact__box'>
          <form>
            <input
              placeholder='Imie'
              type='text'
              onChange={(e) => setName(e.target.value)}
              name='name'
            />
            <input
              placeholder='E-mail'
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              name='email'
            />
            <textarea
              placeholder='Wiadomosc'
              type='text'
              rows='8'
              onChange={(e) => setMsg(e.target.value)}
              name='msg'
            />
            <button onSubmit={(e) => submit(e)}>Wyslij</button>
          </form>
          <div className='contact__text'>
            <h2>Zyski zaczynaja sie od kontaktu</h2>
            <p>Dokladnie omowimy caly plan i ustalimy wszystkie szczegoly.</p>
            <br />
            <p>Wspolnie uda nam sie osiagnac cel a Twoja firma pozyska swietna strone.</p>
            <br />
            <p>Nasza cena to tylko 2000zl.</p>
            <br />
            <p>Pierwszy krok nalezy do Ciebie.</p>
            <p>My zajmiemy sie reszta.</p>
            <h3>email@email.com</h3>
          </div>
        </div>
      </div>

      {/* Elementy */}
      <div className='contact__elementy'>
        <MalyTriangle />
        <Krezka />
        <Krezka2 />
        <InnyTriangle />
      </div>
    </div>
  );
}

export default Contact;
