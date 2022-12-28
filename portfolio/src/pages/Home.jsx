import React, { Component } from 'react';
import '../css/home.css'

class Home extends Component {
  render() {
    return (
      <main className='home-content'>
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

export default Home;