import { ADD_FAVOR_FORK, REMOVE_FAVOR_FORK } from '../constants/actions';

export const addFavorFork = fork => ({
    type: ADD_FAVOR_FORK,
    payload: fork
});

export const removeFavorFork = fork => ({
    type: REMOVE_FAVOR_FORK,
    payload: fork
});