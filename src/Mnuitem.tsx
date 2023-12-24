import * as React from 'react';
import { useState } from 'react';

export default function Mnuitem() {
  const [value, setValue] = useState('');
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(30);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rx, setRX] = useState(0);
  const [ry, setRY] = useState(0);

  function move(width: number) {
    setX((x) => (x + 100 > width ? 0 : x + 30));
    setRX((rx) => rx + 5);
  }

  /**
   * Creates a coordinate path for the Path SVG element with rounded corners
   * @param pathCoords - An array of coordinates in the form [{x: Number, y: Number}, ...]
   *
   * https://stackoverflow.com/questions/10177985/svg-rounded-corner
   */
  function createRoundedPathString(pathCoords) {
    const path = [];
    const curveRadius = 3;

    // Reset indexes, so there are no gaps
    pathCoords = pathCoords.slice();

    for (let i = 0; i < pathCoords.length; i++) {
      // 1. Get current coord and the next two (startpoint, cornerpoint, endpoint) to calculate rounded curve
      const c2Index =
        i + 1 > pathCoords.length - 1 ? (i + 1) % pathCoords.length : i + 1;
      const c3Index =
        i + 2 > pathCoords.length - 1 ? (i + 2) % pathCoords.length : i + 2;

      const c1 = pathCoords[i];
      const c2 = pathCoords[c2Index];
      const c3 = pathCoords[c3Index];

      // 2. For each 3 coords, enter two new path commands: Line to start of curve, bezier curve around corner.

      // Calculate curvePoint c1 -> c2
      const c1c2Distance = Math.sqrt(
        Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2)
      );
      const c1c2DistanceRatio = (c1c2Distance - curveRadius) / c1c2Distance;
      const c1c2CurvePoint = [
        ((1 - c1c2DistanceRatio) * c1.x + c1c2DistanceRatio * c2.x).toFixed(1),
        ((1 - c1c2DistanceRatio) * c1.y + c1c2DistanceRatio * c2.y).toFixed(1),
      ];

      // Calculate curvePoint c2 -> c3
      const c2c3Distance = Math.sqrt(
        Math.pow(c2.x - c3.x, 2) + Math.pow(c2.y - c3.y, 2)
      );
      const c2c3DistanceRatio = curveRadius / c2c3Distance;
      const c2c3CurvePoint = [
        ((1 - c2c3DistanceRatio) * c2.x + c2c3DistanceRatio * c3.x).toFixed(1),
        ((1 - c2c3DistanceRatio) * c2.y + c2c3DistanceRatio * c3.y).toFixed(1),
      ];

      // If at last coord of polygon, also save that as starting point
      if (i === pathCoords.length - 1) {
        path.unshift('M' + c2c3CurvePoint.join(','));
      }

      // Line to start of curve (L endcoord)
      path.push('L' + c1c2CurvePoint.join(','));
      // Bezier line around curve (Q controlcoord endcoord)
      path.push('Q' + c2.x + ',' + c2.y + ',' + c2c3CurvePoint.join(','));
    }
    // Logically connect path to starting point again (shouldn't be necessary as path ends there anyway, but seems cleaner)
    path.push('Z');

    return path.join(' ');
  }

  return (
    <svg viewBox="0 0 710 300" width="100%" height="300">


<path d="M481.175 392.727C479.847 393.284 478.581 393.739 477.175 394.414L477.175 431.227C477.202 431.258 477.234 431.289 477.261 431.321C477.572 431.68 478.108 432.081 479.455 432.977C479.558 433.046 479.609 433.056 479.67 433.102L673.258 433.102C673.739 432.736 674.263 432.399 674.72 432.008L674.72 404.696C672.463 399.482 666.81 395.105 659.753 392.727L481.175 392.727Z" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#007aff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="曲線 6"/>
<path d="M657.796 393.021C657.796 395.513 659.673 397.939 659.673 400.657C659.673 401.964 660.049 403.252 660.049 404.475C660.049 405.571 658.865 404.947 659.298 404.475C660.75 402.893 674.688 403.512 674.688 406.384" fill="none" opacity="1" stroke="#007aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="曲線 7"/>
<text x="490" y="413" class="caption_lt">Clinical Notes</text>

<path d="M50.5959 158.115C49.9137 158.51 49.2635 158.832 48.5414 159.31L48.5414 185.377C48.5553 185.399 48.5716 185.421 48.5855 185.444C48.7453 185.698 49.0208 185.982 49.7123 186.616C49.7654 186.665 49.7916 186.673 49.8227 186.705L149.26 186.705C149.507 186.446 149.776 186.207 150.011 185.93L150.011 166.59C148.852 162.899 145.948 159.799 142.323 158.115L50.5959 158.115Z" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#007aff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="曲線 6"/>
<path d="M141.318 158.323C141.318 160.088 142.282 161.806 142.282 163.731C142.282 164.656 142.475 165.568 142.475 166.434C142.475 167.21 141.867 166.768 142.09 166.434C142.835 165.314 149.995 165.752 149.995 167.786" fill="none" opacity="1" stroke="#007aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.85943" vectornator:layerName="曲線 7"/>


      <rect
        width={width}
        height={height}
        x={x}
        y={y}
        rx={rx}
        ry={ry}
        onClick={() => {
          move(width);
        }}
      />
    </svg>
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
