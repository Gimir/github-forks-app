import { combineReducers } from 'redux';
import favoriteForks from './favoriteForks';
import onLoad from './onLoad';
import forks from './forks';
import pageNumber from './pageNumber';
import requestData from './requestData';

export default history => combineReducers({
    favoriteForks,
    onLoad,
    forks,
    pageNumber,
    requestData
});