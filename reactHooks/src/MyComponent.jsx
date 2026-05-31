import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, empoloymentStatus] = useState(false);

    const updateName = () => {
        setName("Cadence");
    }

    const increaseAge = () => {
        setAge(age + 1);
    }

    const employToggler = () => {
        empoloymentStatus(!(isEmployed));
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick = {updateName}>Update Name</button>

        <p>Age: {age}</p>
        <button onClick = {increaseAge}>+</button>

        <p>Employment Status: {isEmployed ? "true" : "false"}</p>
        <button onClick = {employToggler}>Toggle Employment</button>
    </div>)

}
export default MyComponent;