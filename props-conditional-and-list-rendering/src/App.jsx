import Dogs from "./Dogs";
import ConditionalRendering from "./ConditionalRendering";
import ListRendering from './ListRendering.jsx'
import ListRenderingWithProps from './ListRenderingWithProps.jsx'

function App(){

  const games = [{uid: 1, name: "Elden Ring", copiesSold: 30}, 
                {uid: 2, name: "Red Dead", copiesSold: 165}, 
                {uid: 3, name: "Clair Obscur", copiesSold: 7}, 
                {uid: 4, name: "Outlast", copiesSold: 11}, 
                {uid: 5, name: "Half Life 2", copiesSold: 1}];

  return(<ListRenderingWithProps arr={games} title="Games"></ListRenderingWithProps> );
}

export default App;