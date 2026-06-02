import Dogs from "./Dogs";

function App(){

  return(<>
  <Dogs name="Moshu" age={3} isVaccinated={true}></Dogs>
  <Dogs name="Jack <3" age={2} isVaccinated={false}></Dogs>
  <Dogs name="Brownie" age={21} isVaccinated={false}></Dogs>
  <Dogs name="Biscuit" age={8} isVaccinated={true}></Dogs>
  <Dogs name="Menma" age={40} isVaccinated={false}></Dogs>
  </>);
}

export default App;