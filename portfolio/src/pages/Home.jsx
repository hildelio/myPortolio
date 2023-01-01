import React, { Component } from 'react';
import '../css/home.css'
import '../css/homeMatrix.css'
import '../css/homePersonal.css'
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { personalTheme, matrixTheme} = this.props;
    return (
      <main className={ personalTheme ? 'home-content-personal' : matrixTheme ? 'home-content-matrix' : 'home-content'}>
        <h3>Hello</h3>
        <h2>I'm Hildélio Júnior</h2>
        <h1>Web Developer</h1>
        <section>
          <p className='design-info'>Design by Alice Rocha</p>
        </section>
      </main>
    );
  }
}

export default connect()(Home);