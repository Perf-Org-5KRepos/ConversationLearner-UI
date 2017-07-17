import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BLISAppsHomepage from '../containers/BLISAppsHomepage';
import Header from '../components/Header';
import Docs from '../components/otherPages/Docs';
import About from '../components/otherPages/About';
import Support from '../components/otherPages/Support';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { State } from '../types'
import axios from 'axios';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <Route exact path="/" component={BLISAppsHomepage as React.ComponentClass<any>} />
          <Route path="/myApps" component={BLISAppsHomepage as React.ComponentClass<any>} />
          <Route path="/about" component={About} />
          <Route path="/support" component={Support} />
          <Route path="/docs" component={Docs} />
        </div>
      </Router>
    );
  }
}