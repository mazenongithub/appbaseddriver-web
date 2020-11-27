import { MYUSERMODEL } from '../actions/types';
// eslint-disable-next-line
export default function (state = {}, action) {
    switch (action.type) {
        case MYUSERMODEL:
            return action.payload;
        default:
            return state;
    }
}