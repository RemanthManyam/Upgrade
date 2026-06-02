import Dogs from "./Dogs";
import ConditionalRendering from "./ConditionalRendering";

function App(){

  return(<>
  <ConditionalRendering username="David Gru" isLoggedIn={true}></ConditionalRendering>
  </>);
}

export default App;