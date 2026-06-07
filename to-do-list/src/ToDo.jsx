import React, {useState} from "react";

function ToDo(){

    const [track, setTrack] = useState();
    const [task, newTask] = useState([]);

    const handleText = () => {
        if(track.trim() !== ""){
            newTask([...task, track]);
            setTrack('');
        }
    }

    return(<>
    <h2>To-Do-list</h2>
    <input type="text" placeholder="Enter a task..." onChange={(e) => setTrack(e.target.value)}></input> 
    <button onClick={handleText}>Add</button>
    <ul><li>{task.join("|")}</li></ul>
    </>);
}

export default ToDo;