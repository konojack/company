import React from 'react';
import Link from 'next/link';
import { Trophy, Steps, Free, MalyTriangle, Krezka, Circle2, Circle} from '../svg/Svg';

function Offer() {
  return (
    <div className='offer__container' id='offer'>
      <div className='offer__wrapper'>
        <div className='offer__box'>
          <h3 className='main__one'>Co oferujemy</h3>
          <h2 className='main__two'>Strony Landing Page</h2>
          <p>
            Idealne rozwiazanie dla osob pracujacych w pojedynke badz mniejszych
            firm.
          </p>
        </div>

        <div className='offer__elements'>
          {/* 1 */}
          <div className='offer__element'>
            <div className='element__left'>
              <Trophy />
              <h3>15 Sekcji</h3>
            </div>
            <div className='element__right'>
              <p>
              <span>11 wyselekcjonowanych sekcji</span> <br />
                + 4 opcjonalne <br />+ niezliczona ilosc sekcji na Panstwa
                zyczenie
              </p>
              <p className='buttonGo buttonBlue'><Link href='/structure'>Zobacz &rarr;</Link></p>
            </div>
          </div>
          {/* 2 */}
          <div className='offer__element'>
            <div className='element__left'>
              <Steps />
              <h3>60+ Krokow</h3>
            </div>
            <div className='element__right'>
              <p>
                <span>60 krokow podjetych w celu stworzenia profesjonalnej strony internetowej.</span>
              </p>
              <p>W tym:</p>
              <p>
                <span># Strona pisana 100% od zera </span> bez uzycia szablonow
                czy nieslawnych, wolnych i powtarzalnych CMS (np. WordPress)
              </p>
              <p>
                <span># SSR:</span> strona tworzy sie po stronie serwera a nie w
                przegladrce. Oznacza to ze robotom Google latwiej bedzie ja
                znalezc. Dzieki temu pozycja strony bedzie o wiele lepsza.{' '}
              </p>
              <p>
                <span># PWA:</span> progresywna aplikacja, dzieki ktorej strona
                bedzie 2x szybciej dzieki zapisowi danych po pierwszych wizytach
                a takze bedzie dzialac nawet gdy nie bedzie polaczenia z
                internetem{' '}
              </p>
              <p>
                <span># Responsywnosc:</span> strona w 100% idealnie dopasowana
                pod kazde urzadzenie i przegladarke internetowa co do pixela{' '}
              </p>
              <p>
                <span># Instalacja i optymalizacja Swietej trojki:</span> <br />Google
                My Business Page - bardzo wazna czesc informacyjna o firmie,
                widoczna po prawej stronie ekranu, po wyszukaniu w Google. 80%
                firm wykorzystuje ta czesc tylko w 20%. My uzyjemy jej w 100%.
                <br />
                Google Search console i Google Analytics - profesjonalne
                narzedzia do kontroli statystyk, pomagajace dotrzec do wiekszej
                ilosci klientow
              </p>
              <p className='buttonGo buttonBlue'><Link href='/steps'>Zobacz &rarr;</Link></p>
            </div>
          </div>
          {/* 3 */}
          <div className='offer__element'>
            <div className='element__left red'>
              <Free />
              <h3>Darmowy e-book</h3>
            </div>
            <div className='element__right'>
              <p>
                <span>Content Marketing i Social Media</span>
                <br />
                Zbior najlepszych zasad dotyczacych tworzenia contentu
                marketingowego, social media i sposobow na zdobycie wiekszej
                ilosci klientow.
              </p>
              <p className='buttonGo buttonBlue'><Link href='/ebook'>Zobacz &rarr;</Link></p>
            </div>
          </div>
        </div>
      </div>

      <div className='offer__elementy'>
        <MalyTriangle />
        <Krezka />
        <Circle2 />
        <Circle />
      </div>
    </div>
  );
}

export default Offer;


