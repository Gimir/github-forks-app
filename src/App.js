import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HeaderContainer from './components/HeaderContainer';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import NotFoundPage from './pages/NotFoundPage';



function App({}) {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search/:owner/:repName/:number" component={ResultsPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;