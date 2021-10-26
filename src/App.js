import { Route } from "react-router-dom";
import SearchCharacter from "./search/SearchCharacter";

const lvDefault = ["도전어비스", "도전가디언"];
const lv1325 = ["아이라의눈", "오레하 프라바사"];
const lv1370 = ["아르고스"];
const lv1385 = ["쿠크세이튼리허설"];
const lv1415 = ["발탄"];
const lv1430 = ["아브렐슈드데자뷰", "비아키스"];

function App() {
  return (
    <div className="App">
      <Route path="/search" component={SearchCharacter} />
    </div>
  );
}

export default App;
