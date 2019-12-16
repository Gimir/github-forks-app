import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import favoritForks from './favoritForks';
import onLoad from './onLoad';
import forks from './forks';
import pageNumber from './pageNumber';

export default history => combineReducers({
    favoritForks,
    onLoad,
    forks,
    pageNumber,
    router: connectRouter(history)
});