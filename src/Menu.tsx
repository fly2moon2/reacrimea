import * as React from 'react';
import * as Menuitem from './Menuitem';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //squares: Array(9).fill(null),
      menutitle: 'item 1',
      x: 0,
    };
  }

  renderMenuitem(x) {
    return <Menuitem.default value="this.state.menutitle" x="300" />;
  }

  render() {
    //const status = 'Next player: X';

    return (
      <svg viewBox="0 0 710 300" width="100%" height="300">
        {this.renderMenuitem(500)}
      </svg>
    );
  }
}

export default Menu;
