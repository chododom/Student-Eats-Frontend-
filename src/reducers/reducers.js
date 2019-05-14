import { combineReducers } from 'redux'
import {
    ADD_FOOD, REMOVE_FOOD, REMOVE_ALL
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
        case REMOVE_FOOD:
            return state.filter((food) => {
                    return food.food.id !== action.id
                })
            ;
        case REMOVE_ALL:
            return [];
        default:
            return state
    }
}

const steaApp = combineReducers({
    basket
});

export default steaApp