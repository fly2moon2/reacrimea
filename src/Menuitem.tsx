import * as React from 'react';
import { useState } from 'react';

export default function Menuitem() {
  const [value, setValue] = useState('');
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rx, setRX] = useState(0);
  const [ry, setRY] = useState(0);

  function move(width: number) {
    setX(x=> x + 100 > width?0:x + 30);
    setRX(rx=> rx + 5);
  }

  return (
    <rect
      width={width}
      height={height}
      x={x}
      y={y}
      rx={rx}
      ry={ry}
      onClick={() =>
       {move(width);}
      }
    />
  );
  /*
// set the props to empty object, and set the state to {value: string}
class Menuitem extends React.Component<
  {},
  {
    value: string;
    width: number;
    height: number;
    x: number;
    y: number;
    rx: number;
    ry: number;
  }
> {
  // TODO: remove the constructor
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      width: 300,
      height: 100,
      x: 0,
      y: 0,
      rx: 0,
      ry: 0,
    };
  }


  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    return (
      <rect
        width={this.state.width}
        height={this.state.height}
        x={this.state.x}
        y={this.state.y}
        rx={this.state.rx}
        ry={this.state.ry}
        onClick={() =>
          this.setState({
            x: this.state.x >= this.state.width ? 0 : this.state.x + 100,
            rx: this.state.rx + 1,
          })
        }
      />
    );
  }
  */
}

//export default Menuitem;
