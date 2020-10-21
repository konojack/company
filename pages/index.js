import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { Link } from '../i18n'
import SEO from '../component/Seo';
// import { withTranslation } from '../i18n';
import gsap from 'gsap';

import Welcome from '../sections/Welcome'
import GeneralInfo from '../sections/GeneralInfo'
import Offer from '../sections/Offer'

const timeline = gsap.timeline();
// const Home = ({ t }) => {
const Home = () => {

  return (
    <>
      <SEO title='Page one' description='Description' />
      <Welcome />
      <GeneralInfo />
      <Offer />
    </>
  );
};

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

// export default withTranslation('common')(Home);
export default Home;