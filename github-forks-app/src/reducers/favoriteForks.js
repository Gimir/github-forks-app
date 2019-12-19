import { ADD_FAVOR_FORK, REMOVE_FAVOR_FORK } from '../constants/actions';

const initialState = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAVOR_FORK:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_FAVOR_FORK:
            return state.filter(fork => fork !== action.payload);
        default:
            return state;
    }
}