import { START_LOADING, STOP_LOADING_ERROR, STOP_LOADING_SUCCESS } from '../constants/actions';

const initialState = {
    loading: false,
    error: null
};

export default (state=initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                loading: true,
                error: null
            };
        case STOP_LOADING_SUCCESS:
            return {
                loading: false,
                error: null
            };
        case STOP_LOADING_ERROR:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    };
};