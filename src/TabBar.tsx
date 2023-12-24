import * as React from 'react';
import { useState } from 'react';
import * as Tab from './Tab';

export default function TabBar() {
  const [value, setValue] = useState('');

  return <div class="tabbar"><span><Tab.default value="Clinical Notes" /></span><span><Tab.default value="Medical Docs." /></span>
  <span><Tab.default value="Medical Docs." /></span>
  </div>;

}
