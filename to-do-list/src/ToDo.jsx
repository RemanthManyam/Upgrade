

function ToDo(){

    const arr = [];

    a button(btn)
    a inputbox(userInput)

    btn.onClick(() => {

        arr.push(userInput);
        userInput.clear();

    })

    let task = arr.map((ele) => {
        return ele;
    })

    return(<><li>{task}</li></>);
}

export default ToDo;