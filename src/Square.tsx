import * as React from 'react';


class Square extends React.Component {
  // TODO: remove the constructor
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    return (
      <button className="square" onClick={() => this.setState({value: (this.state.value==null?'X':null)})}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;