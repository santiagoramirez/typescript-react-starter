import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from '@app-shared/store';

import Footer from '@app-shared/components/Footer/Footer';
import Header from '@app-shared/components/Header/Header';

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

render(<App />, document.querySelector('#app'));
