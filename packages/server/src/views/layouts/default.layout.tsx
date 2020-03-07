import React, { Component } from 'react';

class DefaultLayout extends Component {
  public render() {
    return (
      <>
        <header className="header">Header content goes here...</header>

        <div className="main">{this.props.children}</div>

        <footer className="footer">Footer content goes here...</footer>
      </>
    );
  }
}

export default DefaultLayout;
