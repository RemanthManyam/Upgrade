import ListRenderingWithProps from "./ListRenderingWithProps";

function App(){

const games = [{uid: 1,name: "Elden Ring", data: 30}, {uid: 2,name:"Red Dead", data: 165}, {uid: 3,name: "Clair Obscur", data: 7}, 
        {uid: 4,name:"Outlast", data: 11}, {uid: 5,name:"Half Life 2", data: 1}];

  const movies = [{uid: 1, data: 400}, {uid: 2, name: "Scarface", data: 700}, {uid:3, name: "Whiplash", data: 450}, 
    {uid:4, name: "Zodiac",data: 150}, {uid:5, name: "No hard feelings", data: 300}];
    
    return(<>
          {games.length > 0 && <ListRenderingWithProps title="Games" listData={games}></ListRenderingWithProps>}
          {movies.length > 0 ? <ListRenderingWithProps title="Movies" listData={movies}></ListRenderingWithProps> : null}
    </>);
}

export default App;
