import React, { Component } from 'react';
import '../css/home.css'
import '../css/homeMatrix.css'
import '../css/homePersonal.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    const { personalTheme, matrixTheme} = this.props;
    return (
      <main className={ personalTheme ? 'home-content-personal' : matrixTheme ? 'home-content-matrix' : 'home-content'}>
        {
          matrixTheme && <p>Wake up Neo...</p>
        }
        <h3>Hello</h3>
        <h2>I'm Hildélio Júnior</h2>
        <h1>Web Developer</h1>
        {
          matrixTheme &&
          <p className='follow-rabbit'>Follow the White Rabbit</p>
        }
        {
          personalTheme &&
          <section>
          <p className='design-info'>Design by Alice Rocha</p>
        </section>
        }
        
      </main>
    );
  }
}

Home.propTypes = {
  personalTheme: PropTypes.bool,
  matrixTheme: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  personalTheme: state.theme.personalTheme,
  matrixTheme: state.theme.matrixTheme,
});


export default connect(mapStateToProps)(Home);