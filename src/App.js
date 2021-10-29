import { Route } from "react-router-dom";
import SearchCharacter from "./search/SearchCharacter";
import MainComponent from "./main/MainComponent";

function App() {
  return (
    <div className="App">
      <Route path="/" component={MainComponent} exact />
      <Route path="/search" component={SearchCharacter} />
    </div>
  );
}

export default App;
