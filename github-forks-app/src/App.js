import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HeaderContainer from './components/headerContainer';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';



function App({}) {
  return (
    <Router>
      <HeaderContainer />
      <Link to="/">Go home</Link>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search/:owner/:repName/:number" component={ResultsPage} />
      </Switch>
    </Router>
  );
};

export default App;