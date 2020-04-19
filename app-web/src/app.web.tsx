import React, { Component } from 'react';

import Navigation from '@app-shared/components/Navigation/Navigation';

import { AppRoutes } from '@app-shared/routes';
import { PageRoutes } from '@server/routes';

class App extends Component {
  public render() {
    return (
      <div>
        <Navigation />
        <main className="main">
          {AppRoutes}
          {PageRoutes}
        </main>
      </div>
    );
  }
}

export default App;
