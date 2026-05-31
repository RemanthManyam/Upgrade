import React, {useState, useEffect} from 'react';

function UseEffect(){

    const[count, setCount] = useState(0);
    const[colour, setColor] = useState("blue");

    useEffect(() => {                                       //useEffect(function, [dependencies])
        document.title = `${count} ${colour}`;
    },[count, colour]);                   

    function inc(){
        setCount(c => c + 1);
    }

    function dec(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "blue" ? "green" : "blue")
    }

    return(<>
    <p style = {{color: colour}}>Count: {count}</p>
    <button onClick = {inc}>+</button>
    <button onClick = {dec}>-</button><br/>
    <button onClick= {changeColor}>Change Color</button>
    </>);

}

export default UseEffect;