import React, {useState, useEffect} from 'react';

function UseEffect(){

    const[count, setCount] = useState(0);

    useEffect(() => {                                       //useEffect(function, [dependencies])
        document.title = `${count}`;
    },[count]);                   

    function inc(){
        setCount(c => c + 1);
    }

    function dec(){
        setCount(c => c - 1);
    }

    return(<>
    <p>Count: {count}</p>
    <button onClick = {inc}>+</button>
    <button onClick = {dec}>-</button>
    
    </>);

}

export default UseEffect;