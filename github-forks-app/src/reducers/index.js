import { combineReducers } from 'redux';
import favoritForks from './favoritForks';
import onLoad from './onLoad';
import forks from './forks';
import pageNumber from './pageNumber';
import requestData from './requestData';

export default history => combineReducers({
    favoritForks,
    onLoad,
    forks,
    pageNumber,
    requestData
});