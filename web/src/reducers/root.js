import { getDays } from '../functions/getDays.js';

export const rootReducer = function (state, action) {
    switch (action.type) {
        case 'GENERATE':
            return Object.assign({}, state, {
                entries: getDays(state.pattern, state.start_date)
            });
            break;
        case 'SET_PATTERN':
            return Object.assign({}, state, {
                pattern: action.pattern
            });
            break;
        case 'SET_START_DATE':
            return Object.assign({}, state, {
                start_date: action.start_date
            });
            break;
        case 'DOWNLOAD':
            return state;
            break;
        default:
            return state;
    }
}
