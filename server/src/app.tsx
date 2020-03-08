import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import appRoutes from '@app/routes';
import pageRoutes from '@server/routes';

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/app">App Home</Link>
    </li>
    <li>
      <Link to="/app/about">App About</Link>
    </li>
  </ul>
);

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
