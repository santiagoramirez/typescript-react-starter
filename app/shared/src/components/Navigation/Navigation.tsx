import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FunctionComponent = () => (
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

export default Navigation;
