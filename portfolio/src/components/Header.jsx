import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../css/header.css'
import '../css/headerPersonal.css'
import '../css/headerMatrix.css'
import { chooseTheme } from '../redux/actions';
import PropTypes from 'prop-types'

class Header extends Component {
  handleClick = ({target}) => {
    const { dispatch } = this.props;
    dispatch(chooseTheme(target.name));
  }
  render() {
    const { personalTheme, matrixTheme} = this.props;
    return (
      <header className={personalTheme ? 'header-personal' : matrixTheme ? 'header-matrix' : 'header'}>
        <nav className={personalTheme ? 'header-nav-personal' : matrixTheme ? 'header-nav-matrix' : 'header-nav'}>
          <label className={personalTheme ? 'header-chooseThemeContent-personal' : matrixTheme ? 'header-chooseThemeContent-matrix' : 'header-chooseThemeContent' }>
            Themes
            <button
              className={personalTheme ? 'header-chooseTheme-personal' : matrixTheme ? 'header-chooseTheme-matrix' : 'header-chooseTheme' }
              name='defaultTheme'
              type='button'
              onClick={(event) => this.handleClick(event)}
            >
              Default
            </button>
            <button
              className={personalTheme ? 'header-chooseTheme-personal' : matrixTheme ? 'header-chooseTheme-matrix' : 'header-chooseTheme' }
              name='personalTheme'
              type='button'
              onClick={(event) => this.handleClick(event)}
            >
              Personal
            </button>
            <button
              className={personalTheme ? 'header-chooseTheme-personal' : matrixTheme ? 'header-chooseTheme-matrix' : 'header-chooseTheme' }
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
          <section className={personalTheme ? 'section-nav-personal' : matrixTheme ? 'section-nav-matrix' : 'section-nav'}>
            <a href='https://github.com/hildelio' target='_blank' rel="noreferrer">
              <GitHubIcon color={personalTheme ?'secondary' : matrixTheme ? 'success' : 'secondary'} />
            </a>
            <a href='https://linkedin.com/in/hildelio-junior' target='_blank' rel="noreferrer">
              <LinkedInIcon color={personalTheme ?'secondary' : matrixTheme ? 'success' : 'secondary'} />
            </a>
          </section>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  personalTheme: PropTypes.bool,
  matrixTheme: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  personalTheme: state.theme.personalTheme,
  matrixTheme: state.theme.matrixTheme,
});

export default connect(mapStateToProps)(Header);