

function ListRendering(){
    
    const games = [{uid: 1,name: "Elden Ring", copiesSoldInMillions: 30}, {uid: 2,name:"Red Dead", copiesSoldInMillions: 165}, {uid: 3,name: "Clair Obscur", copiesSoldInMillions: 7}, 
        {uid: 4,name:"Outlast", copiesSoldInMillions: 10}, {uid: 5,name:"Half Life 2", copiesSoldInMillions: 1}];

    // games.sort((a,b) => a.name.localeCompare(b.name)); ALPHABETICAL SORT
    // games.sort((a,b) => b.name.localeCompare(a.name)); REVERSE ALPHABETICAL
    games.sort((a,b) => a.copiesSoldInMillions - b.copiesSoldInMillions); //ASCENDING ORDER
    // games.sort((a,b) => b.copiesSoldInMillions - a.copiesSoldInMillions); DESCENDING ORDER

    const tenM = games.filter(ele => ele.copiesSoldInMillions > 10);

    // const listItems = games.map((ele) => <li key={ele.uid}>
    //                                         {ele.name}: &nbsp; <br></br>
    //                                         Copies Sold: {ele.copiesSoldInMillions}M
    //                                         </li>);

    const listItems = tenM.map((ele) => <li key={ele.uid}>
                                        {ele.name}: &nbsp;<br></br>
                                        Copies Sold:{ele.copiesSoldInMillions}M
                                        
                                        </li>);

    return(<ul>{listItems}</ul>);
}

export default ListRendering;