import React, {useState} from "react";

function ToDo(){

    const [track, setTrack] = useState();
    const [task, newTask] = useState([]);

    return(<>
    <h2>To-Do-list</h2>
    <input type="text" placeholder="Enter a task..."></input> 
    <button>Add</button>
    <ol><li>Hy</li>
        <li>Hy</li>
        <li>Hy</li></ol>
    </>);
}

export default ToDo;