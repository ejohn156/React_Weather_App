import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import './custom.css'

export default class App extends Component {


  static displayName = App.name;
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Profile' component={Profile} />
      </Layout>
    );
  }
}
