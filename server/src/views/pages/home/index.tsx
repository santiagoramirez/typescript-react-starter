import React, { Component } from 'react';

import DefaultLayout from '@server/views/layouts/default.layout';
import Helmet from 'react-helmet';

class Home extends Component {
  public render() {
    return (
      <DefaultLayout>
        <Helmet>
          <title>Homepage Here!</title>
        </Helmet>
        <span>This is a React server-side rendered homepage!</span>
      </DefaultLayout>
    );
  }
}

export default Home;
