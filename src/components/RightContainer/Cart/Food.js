import React from 'react';

/**
 * represents the single food item in the cart component
 * @param props - information about the food
 * @returns {*} food information in the html notation
 */
function food(props){
    return(
        <div><p>{props.food.name} </p><p>{props.food.price} Kč </p></div>
    )
 }

 export default food;