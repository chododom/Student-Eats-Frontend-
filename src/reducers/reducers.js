import { combineReducers } from 'redux'
import {
    ADD_FOOD
} from '../actions/basket_actions'

function basket(state = [], action) {
    switch (action.type) {
        case ADD_FOOD:
            return [
                ...state,
                {
                    food: action.food
                }
            ];

        default:
            return state
    }
}

const steaApp = combineReducers({
    basket
});

export default steaApp