import React, {useState} from 'react';

function MyComponent(){

    // const [age, setAge] = useState(0);

    // const incrementAge = () => {
    //     setAge(age + 1);
    // }

    // return(<div>
    //     <p>Age: {age}</p>
    //     <button onClick={incrementAge}>Increase Age</button>
    // </div>);

    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Cadence");
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick = {updateName}>Update Name</button>
    </div>)

}
export default MyComponent;