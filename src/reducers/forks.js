import { SET_FORKS } from "../constants/actions";

export default (state=[], action) => {
    switch (action.type) {
        case SET_FORKS:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
}