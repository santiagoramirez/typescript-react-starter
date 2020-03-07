import React, { Component } from 'react';

import './index.scss';

class Footer extends Component {
  public render() {
    return (
      <div className="footer">
        <div className="container container--lg">
          <div className="row">
            <div className="col-12">
              <p>Copyright stuff could go here.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
