import React from 'react';

function food(props){
    return(
        <div><p>{props.food.name} </p><p>{props.food.price} Kč <button className={"btn btn-danger"}>X</button></p></div>
    )
 }

 export default food;