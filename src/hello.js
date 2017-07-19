import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello, world!</h1>
        <p>Another React boilerplate. This boilerplate is as minimalist as can be.</p>
        <ul className="checklist">
          <li>React JS</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>webpack-dev-server</li>
        </ul>
      </div>
    );
  }
}
