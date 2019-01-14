import ActionTypes from '../actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ActionTypes.ADDED_NEW_GAME:
            return action.payload;
        default:
            return state;
    }
};