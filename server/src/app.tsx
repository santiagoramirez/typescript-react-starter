import React, { Component } from 'react';

class App extends Component {
  public componentDidMount() {
    console.log('hydrated!');
  }

  public render() {
    return <div>app test</div>;
  }
}

export default App;
