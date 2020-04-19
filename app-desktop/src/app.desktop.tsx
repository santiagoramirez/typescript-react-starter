import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Navigation from '@app-shared/components/Navigation/Navigation';

import { AppRoutes } from '@app-shared/routes';

class App extends Component {
  public render() {
    return (
      <div>
        <Navigation />
        <main className="main">{AppRoutes}</main>
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
