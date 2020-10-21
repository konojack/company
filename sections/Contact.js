import React from 'react';

function Contact() {
  return (
    <div className='contact__container'>
      <div className='contact__wrapper'>
        <div className='contact__box'>
            <form>
                <input placeholder='Imie' type='text'/>
                <input placeholder='E-mail' type='text'/>
                <textarea placeholder='Wiadomosc' type='text'/>
                <button>Wyslij</button>
            </form>
            <div className='contact_text'>
                <h2>Zyski zaczynaja sie od kontaktu</h2>
                <p>Wspolnie uda nam sie osiagnac cel</p>
                <p>a Twoja firma znajdzie sie w czolowce.</p>
                <br />
                <p>Pierwszy krok nalezy do Ciebie.</p>
                <p>My zajmiemy sie reszta.</p>
                <h3>email@email.com</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
