import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HeaderContainer from './components/HeaderContainer';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';



function App({}) {
  return (
    <>
      <HeaderContainer />
      <Link to="/">Go home</Link>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search/:owner/:repName/:number" component={ResultsPage} />
      </Switch>
    </>
  );
};

export default App;