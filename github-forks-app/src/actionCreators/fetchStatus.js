import { START_LOADING, STOP_LOADING_SUCCESS, STOP_LOADING_ERROR } from '../constants/actions';

export const startLoading = () => ({
    type: START_LOADING
});

export const stopLoadingSuccess = () => ({
    type: STOP_LOADING_SUCCESS
});

export const stopLoadingError = error => ({
    type: STOP_LOADING_ERROR,
    payload: error
});