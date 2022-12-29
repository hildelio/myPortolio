import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';

class App extends Component {
  state ={
    defaultTheme: true,
    matrixTheme: false,
    personalTheme: false,
  }
  render() {
    const {defaultTheme, matrixTheme, personalTheme} = this.state;
    return (
      <div>
        <Header Default={defaultTheme} Matrix={matrixTheme} Personal={personalTheme} />
        <Content defaultTheme={defaultTheme} matrixTheme={matrixTheme} personalTheme={personalTheme} />
      </div>
    );
  }
}

export default App;