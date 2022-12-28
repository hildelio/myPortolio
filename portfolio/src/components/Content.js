import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    );
  }
}

export default Content;