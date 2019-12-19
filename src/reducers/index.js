import { combineReducers } from 'redux';
import favoriteForks from './favoriteForks';
import fetchStatus from './fetchStatus';
import forks from './forks';
import pageNumber from './pageNumber';
import requestData from './requestData';

export default history => combineReducers({
    favoriteForks,
    fetchStatus,
    forks,
    pageNumber,
    requestData
});