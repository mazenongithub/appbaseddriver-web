import { NAVIGATION } from '../actions/types';
// eslint-disable-next-line
export default function (state = {}, action) {
    switch (action.type) {
        case NAVIGATION:
            return action.payload;
        default:
            return state;
    }
}