import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChooseTheme from '../pages/ChooseTheme'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About Me</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <section>
          <ChooseTheme /> 
        </section>
        
      </header>
    );
  }
}

export default Header;