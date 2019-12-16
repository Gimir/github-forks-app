import { ADD_FAVOR_FORK, REMOVE_FAVOR_FORK } from '../constants/actions';

export default (state=[], action) => {
    switch (action.type) {
        case ADD_FAVOR_FORK:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_FAVOR_FORK:
            return state.filter(fork => fork.id !== action.payload);
        default:
            return state;
    }
}