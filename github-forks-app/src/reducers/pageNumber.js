import { SET_PAGE_NUMBER } from '../constants/actions';

export default (state=null, action) => {
    switch (action.type) {
        case SET_PAGE_NUMBER:
            return action.payload;
        default:
            return state;
    }
}