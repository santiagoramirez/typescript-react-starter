import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "@styles/base.scss";

import store from "@store";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

class App extends React.Component {

  public render() {
   return (
     <div>
      <Provider store={store}>
        <Header />
        <Footer />
      </Provider>
     </div>
   );
  }

}

render(<App />, document.querySelector("#app"));
