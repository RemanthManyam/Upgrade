import React, {useState} from 'react';

function Counter(){

    const [count, changeCount] = useState(0);

    const increase = () => {
        changeCount(count + 1);
    }

    const decrease = () => {
        changeCount(count - 1);
    }

    const reset = () => {
        changeCount(0);
    }

    return(<div className="body">
        <p className="counter">{count}</p>
        <button className="countButton" onClick={increase}>+</button>
        <button className="countButton" onClick={reset}>Reset</button>
        <button className="countButton" onClick={decrease}>-</button>
    </div>);
}

export default Counter