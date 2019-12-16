import { SET_PAGE_NUMBER } from '../constants/actions';

export const setPageNumber = number => ({
    type: SET_PAGE_NUMBER,
    payload: number
});