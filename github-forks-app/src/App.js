import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchForks } from './actionCreators/forks';
import { history } from './store';

import Header from './components/header';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

function App({fetchForks, changePage}) {
  return (
    <Router>
      <Header onClick={fetchForks.bind(this, 'reduxjs', 'react-redux', 1)} changePage={changePage} />
      <Link to="/search?page=1?repository=reduxjs/react-redux">gimir</Link>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search/:number/:owner/:repName" component={ResultsPage} />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchForks,
  changePage: () => push('/search/1/reduxjs/react-redux')
}, dispatch);

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App))
