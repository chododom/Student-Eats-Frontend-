/*
 * action types
 */

export const ADD_FOOD = 'ADD_FOOD';

/*
 * action creators
 */

export function addFood(food) {
    return { type: ADD_FOOD, food }
}