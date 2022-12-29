import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/header.css'
import { chooseTheme } from '../redux/actions';

class Header extends Component {
  handleClick = ({target}) => {
    const { dispatch } = this.props;
    dispatch(chooseTheme(target.name));
  }
  render() {
    return (
      <header className='header'>
        <nav className='header-nav'>
          <label>
            Themes
            <button
              name='defaultTheme'
              type='button'
              onClick={(event) => this.handleClick(event)}
            >
              Default
            </button>
            <button
              name='personalTheme'
              type='button'
              onClick={(event) => this.handleClick(event)}
            >
              Personal
            </button>
            <button
              name='matrixTheme'
              type='button'
              onClick={(event) => this.handleClick(event)}
            >
              Matrix
            </button>
          </label>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Me</Link>
          <Link to='/projects'>Projects</Link>
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

export default connect()(Header);