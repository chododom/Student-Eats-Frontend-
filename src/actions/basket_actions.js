/*
 * action types
 */

export const ADD_FOOD = 'ADD_FOOD';
export const REMOVE_FOOD = 'REMOVE_FOOD';
export const REMOVE_ALL = 'REMOVE_ALL';

/*
 * action creators
 */

export function addFood(food) {
    return { type: ADD_FOOD, food }
}

export function removeFood(id) {
    return { type: REMOVE_FOOD, id }
}

export function removeAll(){
    return { type: REMOVE_ALL}
}