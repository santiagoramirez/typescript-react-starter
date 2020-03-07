import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  public render() {
    return (
      <>
        <Helmet>
          <title>The App Homepage</title>
        </Helmet>
      </>
    );
  }
}

export default Home;
