import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../css/header.css'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav className='header-nav'>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About Me</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
          <GitHubIcon color='secondary' />
        </nav>
      </header>
    );
  }
}

export default Header;