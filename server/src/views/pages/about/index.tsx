import React, { Component } from 'react';

import DefaultLayout from '@server/views/layouts/default.layout';
import Helmet from 'react-helmet';

class About extends Component {
  public render() {
    return (
      <DefaultLayout>
        <Helmet>
          <title>About Page</title>
        </Helmet>
        <span>This is a React server-side rendered about page!</span>
      </DefaultLayout>
    );
  }
}

export default About;
