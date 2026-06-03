

function ListRendering(){
    
    const games = ["Elden Ring", "Red Dead", "Clair Obscur", "Outlast", "Half Life 2"]

    // games.sort();

    const listItems = games.map((ele) => <li>{ele}</li>);
    return(<ul>{listItems}</ul>);
}

export default ListRendering;