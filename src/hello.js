import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="wrapper">
        <image className="logo" src={require("./images/react_logo.svg")} />
        <h1>Hello, world!</h1>
        <p>This is just another React boilerplate. This boilerplate is as minimalist as can be, but includes everything you'd need to build your React JS project.</p>
        <ul className="checklist">
          <li><i className="fa fa-check"></i>React JS</li>
          <li><i className="fa fa-check"></i>Webpack</li>
          <li><i className="fa fa-check"></i>Babel</li>
          <li><i className="fa fa-check"></i>cssnext</li>
          <li><i className="fa fa-check"></i>PostCSS</li>
          <li><i className="fa fa-check"></i>React Hot Loader</li>
          <li><i className="fa fa-check"></i>ESLint</li>
        </ul>
      </div>
    );
  }
}
