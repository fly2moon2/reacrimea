import * as React from 'react';
import { useState } from 'react';

export default function Tab(props) {
  //const [value, setValue] = useState('tab...');
  const [sel,setSel] = useState('');
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(30);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function move(width: number) {
    setX((x) => (x + 100 > width ? 0 : x + 30));
  }

  return (
  <svg class="tab" viewBox="-1 -1 123 42" width="100%" height="42">
    <g opacity="1" vectornator:layerName="tab16" onClick={() => setSel({sel: (sel==null?'Y':null)})}>
    <path d="M120 38.8438L120 13.0937C119.283 11.638 118.618 10.441 117.844 9.34375C116.382 7.2726 113.609 4.9585 110.375 2.625C108.427 1.70923 106.265 0.838247 103.688-2.84217e-14L2.4375-2.84217e-14C1.63064 0.550917 0.854076 1.01996 0 1.6875L0 38.0625" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#007aff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="tab16"/>
    <path d="M49.3258 6.92525L72.6963 6.92525L72.6963 10.0053L49.3258 10.0053L49.3258 6.92525Z" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#007aff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="2.14194" vectornator:layerName="tab16"/>

      <foreignObject x="10" y="15" width="110" height="25" class="caption">
          {props.value}{sel}
        </foreignObject>
    </g>
    {/*<svg class="tab" viewBox="0 -1 201 47" width="100%" height="47">
    <g opacity="1" vectornator:layerName="lay16w">
      <path d="M5.06218 1.4175C3.85189 1.96842 2.6986 2.41855 1.4175 3.08608L1.4175 39.4859C1.4423 39.5169 1.47108 39.5476 1.49588 39.5786C1.77923 39.9336 2.26793 40.3306 3.49457 41.2163C3.58878 41.2843 3.63538 41.2949 3.69052 41.3399L180.085 41.3399C180.523 40.9778 181.001 40.6445 181.418 40.2584L181.418 13.2521C179.361 8.0973 174.21 3.76863 167.779 1.4175L5.06218 1.4175Z" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#007aff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="lay16w"/>
      <path d="M165.997 1.65165C165.997 3.6387 167.707 5.57296 167.707 7.7404C167.707 8.78284 168.049 9.80916 168.049 10.7848C168.049 11.6582 166.971 11.1608 167.365 10.7848C168.688 9.52299 181.388 10.0166 181.388 12.307" fill="none" opacity="1" stroke="#007aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="lay16w"/>
      <foreignObject x="10" y="5" width="185" height="44" class="caption">
          Summary of cases not returned for the rest ...
        </foreignObject>
  </g>*/}
  {/*<svg class="tab" viewBox="0 -1 135 48" width="100%" height="48">
      <g opacity="1" vectornator:layerName="lay16">
        <path d="M2.42978 0C1.62293 0.550917 0.854065 1.00105 0 1.66858L0 38.0684C0.0165336 38.0994 0.0357191 38.1301 0.0522534 38.1611C0.241157 38.5161 0.566951 38.9131 1.38472 39.7988C1.44752 39.8668 1.47859 39.8774 1.51535 39.9224L119.112 39.9224C119.404 39.5603 119.722 39.227 120 38.8409L120 11.8346C118.629 6.6798 115.195 2.35113 110.908 0L2.42978 0Z" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#007aff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="lay16"/>
        <path d="M109.72 0.234147C109.72 2.2212 110.86 4.15546 110.86 6.3229C110.86 7.36534 111.088 8.39166 111.088 9.36728C111.088 10.2407 110.369 9.74333 110.632 9.36728C111.514 8.10549 119.98 8.59911 119.98 10.8895" fill="none" opacity="1" stroke="#007aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="lay16"/>
        <foreignObject x="10" y="10" width="125" height="44" class="caption">
          Clinical Notes
        </foreignObject>
  </g>*/}
  </svg>



  );
}
