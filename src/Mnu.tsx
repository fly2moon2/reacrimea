import * as React from 'react';
import { useState } from 'react';
import * as Mnuitem from './Mnuitem';

export default function Mnu() {
  const [value, setValue] = useState('');

  function renderMnuitem(x: number) {
    return <Mnuitem.default />;
  }

  return <Mnuitem.default />;
  /*return (
      {renderMnuitem(500);}
      
  );*/
}
