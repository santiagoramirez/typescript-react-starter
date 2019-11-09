import React, { Component } from "react";

import "./Header.scss";

class Header extends Component {

  public render() {
    return (
      <div className="header | align-items-center d-flex">
        <div className="container container--lg">
          <div className="row">
            <div className="col-12">
              <img className="header__logo" src="/static/images/logo.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
