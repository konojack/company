import React from 'react';
import Link from 'next/link';
// import { useContext } from 'react'
// import { I18nContext } from 'next-i18next'

function NoPage() {
  //     const { i18n: { language } } = useContext(I18nContext)

  //     const msg = (lg) => {
  //         if(lg === 'en'){
  //             return <p>This is the 404 page</p>
  //         } else if (lg === 'pl') {
  //             return <p>Nie ma takiej strony</p>
  //         }
  //     }
  //   return <div>{msg(language)}</div>;
  return (
    <div>
      <div class='center404'>
        <div class='error404'>
          <div class='number404'>4</div>
          <div class='illustration404'>
            <div class='circle404'></div>
            <div class='clip404'>
              <div class='paper404'>
                <div class='face404'>
                  <div class='eyes404'>
                    <div class='eye404 eye404-left'></div>
                    <div class='eye404 eye404-right'></div>
                  </div>
                  <div class='rosyCheeks404 rosyCheeks404-left'></div>
                  <div class='rosyCheeks404 rosyCheeks404-right'></div>
                  <div class='mouth404'></div>
                </div>
              </div>
            </div>
          </div>
          <div class='number404'>4</div>
        </div>

        <div class='text404'>Oops. The page you're looking for doesn't exist.</div>
        <Link href='/'>Back home</Link>
      </div>

    </div>
  );
}

export default NoPage;
