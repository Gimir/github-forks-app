import { SET_REQUEST_DATA } from '../constants/actions';

export default (state={}, action) => {
    switch (action.type) {
        case SET_REQUEST_DATA:
            return action.payload;
        default:
            return state;
    };
};