import React from 'react';

function food(props){
    return(
        <div><p>{props.food.name} </p><p>{props.food.price} Kč </p></div>
    )
 }

 export default food;