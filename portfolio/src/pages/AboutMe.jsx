import React, { Component } from "react";
import aboutMe from '../assets/aboutMe.png';
import { connect } from 'react-redux';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types'
import '../css/aboutMe.css'

class AboutMe extends Component {
  render() {
    const { personalTheme, matrixTheme} = this.props;
    return (
      <div className="app-aboutMe">
          <div className="picture">
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/106602737?v=4"
              alt="avatar"
            />
            <p>Connect with me:{' '}
            <a href='https://linkedin.com/in/hildelio-junior' target='_blank' rel="noreferrer">
              <LinkedInIcon color={personalTheme ?'secondary' : matrixTheme ? 'success' : 'secondary'} />
            </a>
            </p>
          </div>
        <img className="object-img" src={aboutMe} alt='aboutMe' />
      </div>
    );
  }
}

AboutMe.propTypes = {
  personalTheme: PropTypes.bool,
  matrixTheme: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  personalTheme: state.theme.personalTheme,
  matrixTheme: state.theme.matrixTheme,
});

export default connect(mapStateToProps)(AboutMe);
