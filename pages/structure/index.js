import React from 'react';
import StructureInfo from '../../sections/structure/StructureInfo';
import AllStructure from '../../sections/structure/AllStructure';
import Contact from '../../sections/Contact';

function index() {
  return (
    <div>
      <StructureInfo />
      <AllStructure />
      <Contact />
    </div>
  );
}

export default index;
