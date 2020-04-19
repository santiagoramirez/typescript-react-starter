import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from 'app-shared/src/components/Navigation/Navigation';

import appRoutes from 'app-shared/src/routes';
import pageRoutes from '@server/routes';

class App extends Component {
  public render() {
    const routes = [...appRoutes, ...pageRoutes];

    const routeComponents = routes.map(({ path, component }) => (
      <Route key={path} path={path} component={component} exact={true} />
    ));

    return (
      <div>
        <Navigation />
        {routeComponents}
      </div>
    );
  }
}

export default App;
