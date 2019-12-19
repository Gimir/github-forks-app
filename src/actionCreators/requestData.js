import { SET_REQUEST_DATA } from '../constants/actions';

export const setRequestData = (owner, repository, page) => ({
    type: SET_REQUEST_DATA,
    payload: {
        owner,
        repository,
        page
    }
});