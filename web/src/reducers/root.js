import { getDays } from '../functions/getDays.js';

export const rootReducer = function (state, action) {
    switch (action.type) {
        case 'GENERATE':
            return Object.assign({}, state, {
                entries: getDays(action.pattern, action.start)
            });
            break;
        default:
            return state;
    }
}
