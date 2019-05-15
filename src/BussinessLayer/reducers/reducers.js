import { combineReducers } from 'redux'
import {
    ADD_FOOD, REMOVE_FOOD, REMOVE_ALL
} from '../actions/basket_actions'

const EMPTY_BASKET = {chosenCanteen: null, foods:[]};

function basket(state = EMPTY_BASKET, action) {
    switch (action.type) {
        case ADD_FOOD:
            return {chosenCanteen: action.canteen, foods: [
                ...(state.foods),
                {
                    food: action.food
                }]
            };
        case REMOVE_FOOD:
            state.foods = state.foods.filter((food) => {
                return food.food.id !== action.id
            });
            if(state.foods.length === 0){
                state.chosenCanteen = null;
            }
            return Object.assign({}, state);
        case REMOVE_ALL:
            return EMPTY_BASKET;
        default:
            return state
    }
}


const steaApp = combineReducers({
    basket
});

export default steaApp