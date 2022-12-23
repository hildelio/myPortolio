import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ChooseTheme from '../pages/ChooseTheme'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ChooseTheme} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    );
  }
}

export default Content;