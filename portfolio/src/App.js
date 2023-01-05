import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class App extends Component {

  render() {
    const {matrixTheme, personalTheme} = this.props;
    return (
      <div className={personalTheme ? 'app-container-personal' : matrixTheme ? 'app-container-matrix' : 'app-container'}>
        <Header />
        <Content />
      </div>
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

export default connect(mapStateToProps)(App);