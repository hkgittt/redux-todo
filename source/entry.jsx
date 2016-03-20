import './entry.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: null,
    };
  }
  render() {
    return (
      <h1 className="Hello__h1">Hello World</h1>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
