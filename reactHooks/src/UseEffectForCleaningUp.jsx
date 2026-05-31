import React, {useState, useEffect} from 'react';

function UseEffectForCleaningUp(){

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", dynamic);
        console.log("EVENT LISTENER ADDED");

        return() => {window.removeEventListener("resize", dynamic)
            console.log("EVENT LISTENER REMOVED");
        }
},[])

useEffect(() => {
    document.title = `Size: ${height} x ${width}`;
},[height,width])

    

    function dynamic() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }


    return(<>
    <p>Height: {height}px</p>
    <p>Width: {width}px</p>
    </>);
}

export default UseEffectForCleaningUp;