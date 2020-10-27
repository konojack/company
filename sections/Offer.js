import React from 'react';
import Link from 'next/link';
import {
  Trophy,
  Steps,
  Free,
  MalyTriangle,
  Krezka,
  Circle2,
  Circle,
  Deal,
} from '../svg/Svg';

function Offer() {
  return (
    <div className='offer__container' id='offer'>
      <div className='offer__wrapper'>
        <div className='offer__box'>
          <h2 className='main__two'>Interaktywne wizytowki</h2>
          <p>Idealne rozwiazanie dla firm 1-5 osobowych.</p>
        </div>

        <div className='offer__elements'>
          {/* 1 */}
          <div className='offer__element'>
            <div className='element__left'>
              <Trophy />
              <h3>14 Sekcji</h3>
            </div>
            <div className='element__right'>
              <p>
                <span>Wyselekcjonowane Sekcje</span>{' '}
              </p>
              <div className='sekcja__wrapper'>
                <div>
                  <p>1&#41; Sekcja Powitalna</p>
                  <p>2&#41; Sekcja Logo</p>
                  <p>3&#41; Sekcja Opis ogolny</p>
                  <p>4&#41; Sekcja Statystyki</p>
                  <p>5&#41; Sekcja Serwis</p>
                  <p>6&#41; Sekcja O Nas</p>
                  <p>7&#41; Sekcja Video</p>
                  <p>8&#41; Sekcja Certyfikaty</p>
                </div>
                <div>
                  <p>9&#41; Sekcja Prezentacja</p>
                  <p>10&#41; Sekcja Cennik</p>
                  <p>11&#41; Sekcja Opinie Klientow</p>
                  <p>12&#41; Sekcja Prezent</p>
                  <p>13&#41; Sekcja Mapa + Kontakt</p>
                  <p>14&#41; Sekcja Nawigacja + Footer</p>
                  <p>
                    <span>+ niezliczona ilosc sekcji na Panstwa zyczenie</span>
                  </p>
                </div>
              </div>
              <p className='buttonGo buttonBlue'>
                <Link href='/structure'>Zobacz &rarr;</Link>
              </p>
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
                <span>
                  60 krokow podjetych w celu stworzenia profesjonalnej strony
                  internetowej.
                </span>
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
                <span># Instalacja i optymalizacja:</span> <br />
                Google Search console i Google Analytics - profesjonalne
                narzedzia do kontroli statystyk, pomagajace dotrzec do wiekszej
                ilosci klientow
              </p>
              <p className='buttonGo buttonBlue'>
                <Link href='/steps'>Zobacz &rarr;</Link>
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='offer__element'>
            <div className='element__left'>
              <Deal />
              <h3>Google My Business Page</h3>
            </div>
            <div className='element__right element__right-withPhoto'>
              <div className='googlePageText'>
                <p>
                  <span>Google My Business Page</span>
                </p>
                <p>
                  Bardzo wazna czesc informacyjna o firmie, widoczna po prawej
                  stronie ekranu, po wyszukaniu w Google.
                </p>
                <p>
                  80% firm wykorzystuje ta czesc tylko w 20%. My uzyjemy jej w
                  100%.
                </p>
                <p>Zadbamy o kazda mozliwa pozycje dla Google Moja Firma.</p>
                <p>
                  Damy Panstwu rady jak dbac o to by strona pozyskiwala
                  pozytywne komentarze i byla wysoko oceniana.
                </p>
                <p>
                  &#40; Z prawej strony przyklad tego jak moze wygladac Google
                  Moja Firma &#41;
                </p>
              </div>

              <div className='googlePage'>
                <img src='./1gg.png' alt='' />
                <img src='./2gg.png' alt='' />
                <img src='./3gg.png' alt='' />
                <img src='./4gg.png' alt='' />
                <img src='./5gg.png' alt='' />
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className='offer__element'>
            <div className='element__left red'>
              <Free />
              <h3>Darmowy e-book</h3>
            </div>
            <div className='element__right'>
              <p>
                <span>"Content Marketing i Social Media"</span>
                <p>Przygotowalismy dla Panstwa E-book. </p>
                Jest to pelen informacji zbior najlepszych zasad dotyczacych
                tworzenia contentu <br />
                marketingowego, social media i sposobow na zdobycie wiekszej
                ilosci klientow.
              </p>
              <p style={{ color: '#fd2e41' }}>E-book jest w 100% darmowy.</p>
              <p className='buttonGo buttonBlue'>
                <Link href='/ebook'>Zobacz &rarr;</Link>
              </p>
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
