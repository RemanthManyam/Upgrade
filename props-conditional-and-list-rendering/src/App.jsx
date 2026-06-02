import Dogs from "./Dogs";
import ConditionalRendering from "./ConditionalRendering";

function App(){

  return(<>
  <ConditionalRendering username="Anthony" isLoggedIn={true}></ConditionalRendering>
  </>);
}

export default App;