import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/header.css'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav className='header-nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Me</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
          <section className='section-nav'>
            <a href='https://github.com/hildelio' target='_blank' rel="noreferrer">
              <GitHubIcon color='secondary' />
            </a>
            <a href='https://linkedin.com/in/hildelio-junior' target='_blank' rel="noreferrer">
              <LinkedInIcon color='secondary' />
            </a>
          </section>
        </nav>
      </header>
    );
  }
}

export default Header;