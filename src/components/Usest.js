import React from 'react';
import React,{useState} from 'react';


//example 1 use state
const UseSte = () => {

    const [count,setCount]=useState(0)
    
    const increment = () => {

        setCount(count+1);
    }

    const decrement = () => {

        setCount(count-1);
    }


    return(
        <>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        </>
    )
}

export default UseSte;