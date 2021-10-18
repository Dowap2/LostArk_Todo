import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import cheerio from "cheerio";

async function getHTML() {
  const characterName = "스태프로꽝";
  try {
    return await axios.get(
      `https://lostark.game.onstove.com/Profile/Character/${characterName}`
    );
  } catch (error) {
    console.error(error);
  }
}

getHTML()
  .then(html => {
    let titleList = [];
    const $ = cheerio.load(html.data);
    const bodyList = $("div.level-info2__expedition");

    bodyList.each(function(i, elem) {
      titleList[i] = {
        title: $(this)
          .find("span")
          .text()
      };
    });
    return titleList;
  })
  .then(res => console.log(res));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
